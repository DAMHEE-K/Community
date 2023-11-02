import React from "react";
import {Link} from "react-router-dom";

const Board = ({ foodId, foodTitle, userId, foodCreatedAt, foodContent, images }) => {
    return(
        <div>
            <h1>{foodTitle}</h1>
            <p>작성자 : {userId}</p>
            <p>작성일시 : {foodCreatedAt}</p>
            <p>첨부파일 :</p>
            <hr />
            <div>{foodContent}</div>
            <hr />
            <Link to="/">돌아가기</Link>
        </div>
    );
};

export default Board;