import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

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
    <div className="container">
        <div>
            <h1>{foodTitle}</h1>
            <p>글 번호 : {foodId}</p>
            <p>작성자 : {userId}</p>
            <p>작성일시 : {foodCreatedAt}</p>
            <hr />
            <div>{renderImages()}</div>
            <div>{foodContent}</div>
            <hr />
        </div>
        <div>
            <Button text="수정" clickValue={updateBoard}/>
            <Button text="삭제" clickValue={deleteBoard}/>
            <Button text="돌아가기" clickValue={backToList}/>
        </div>
    </div>
    );
};

export default Board;