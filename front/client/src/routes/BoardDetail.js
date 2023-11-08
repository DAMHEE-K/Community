import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Board from '../component/Board'

const BoardDetail = () => {
    const { foodId } = useParams();
    const [loading, setLoading] = useState(true);
    const [board, setBoard] = useState({});
    const getBoard = async() => {
        const resp = await axios.get(`//localhost:5000/api/foodboards/${foodId}`);
        const data = resp.data;
        setBoard(data);
        setLoading(false);
    }

    useEffect(() => {
        getBoard();
    }, []);

    return (
        <div className="container">
            {loading ? (
                <h2>loading중...</h2>
            ) : (
                <Board 
                    foodId = {board.foodId}
                    foodTitle = {board.foodTitle}
                    userId = {board.userId}
                    foodCreatedAt={board.foodCreatedAt}
                    foodContent={board.foodContent}
                    images={board.images}
                />
            )}
        </div>
    );
};

export default BoardDetail;