import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Board from '../component/Board'
import Comment from "../component/Comment";

const BoardDetail = () => {
    const { foodId } = useParams();
    const [loading, setLoading] = useState(true);
    const [board, setBoard] = useState({});
    const [comments, setComments] = useState([]);

    const getBoard = async() => {
        const boardResp = await axios.get(`//localhost:5000/boards/${foodId}`);
        const commentResp = await axios.get(`//localhost:5000/comments/${foodId}`);

        const boardData = boardResp.data;
        const commentData = commentResp.data;

        setBoard(boardData);
        setComments(commentData)
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
                <>
                    <Board 
                        foodId={board.foodId}
                        foodTitle={board.foodTitle}
                        userId={board.userId}
                        foodCreatedAt={board.foodCreatedAt}
                        foodContent={board.foodContent}
                        images={board.images}
                    />
                    <h3>Comments:</h3>
                    {comments.map((comment) => (
                        <Comment
                            userId={comment.userId}
                            content={comment.content}
                        />
                    ))}
                </>
            )}
        </div>
    );
};

export default BoardDetail;