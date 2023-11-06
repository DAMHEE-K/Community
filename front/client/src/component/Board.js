import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Board = ({ foodId, foodTitle, userId, foodCreatedAt, foodContent, images }) => {
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

    const renderImages = () => {
        if(!images) {
            return <p>첨부된 이미지 없음</p>
        }

        if(images.originName) {
            return (
                <div>
                    <p>{images.originName}</p>
                    <img src={`http://localhost:5000/images/${images.uniqueName}`} alt={images.originName} />
                </div>
            )
        }
    }

    return(
    <div className="container mt-5">
        <div className="border p-4">
            <h1>{foodTitle}</h1>
            <p>글 번호 : {foodId}</p>
            <p>작성자 : {userId}</p>
            <p>작성일시 : {foodCreatedAt}</p>
            <hr />
            <div>{renderImages()}</div>
            <div>{foodContent}</div>
            <hr />
        </div>
        <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-primary" onClick={updateBoard}>수정</button>
            <button className="btn btn-danger" onClick={deleteBoard}>삭제</button>
            <button className="btn btn-secondary" onClick={backToList}>목록</button>
        </div>
    </div>
    );
};

export default Board;