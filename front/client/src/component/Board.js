import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const Board = ({ foodId, foodTitle, userId, foodCreatedAt, foodContent }) => {
    const navigate = useNavigate();

    const updateBoard = () => {
        navigate('/update/' + foodId);
    };

    const deleteBoard = async() => {
        if(window.confirm("게시글을 정말 삭제하시겠습니까?")) {
            await axios.delete(`//localhost:5000/api/foodboards/${foodId}`).then((resp) => {
                alert("삭제되었습니다. 게시글 목록으로 이동합니다.");
                navigate('/board');
            });
        }
    };

    const backToList = () => {
        navigate('/board')
    };

    return(
    <div>
        <div>
            <h1>{foodTitle}</h1>
            <p>글 번호 : {foodId}</p>
            <p>작성자 : {userId}</p>
            <p>작성일시 : {foodCreatedAt}</p>
            <hr />
            <div>{foodContent}</div>
            <hr />
        </div>
        <div>
            <button onClick={updateBoard}>수정</button>
            <button onClick={deleteBoard}>삭제</button>
            <button onClick={backToList}>목록</button>
        </div>
    </div>
    );
};

export default Board;