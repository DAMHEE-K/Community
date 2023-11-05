import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BoardWrite = () => {
    const navigate = useNavigate();

    const [board, setBoard] = useState({
        foodTitle : '',
        foodContent : '',
    });


    const onChange = (event) => {
        const { value, name } = event.target;
        setBoard({
            ...board,
            [name] : value,
        });
    };

    const { foodContent, foodTitle, foodUserId } = board;

    const saveBoard = async() => {
        const formData = new FormData();
        formData.append('foodTitle', foodTitle);
        formData.append('foodContent', foodContent);
        formData.append('foodUserId', foodUserId);

        await axios.post(`//localhost:5000/api/foodboards`, 
            formData,
            {
                headers: {
                    'Content-Type' : 'multipart/form-data'
                },
            }
        ).then((resp) => {
            alert("게시글이 등록되었습니다.");
            navigate('/board');
        });
    };

    const backToList = () => {
        navigate('/board');
    };

    return (
        <div>
            <div>
                <h1>글 수정</h1>
            </div>
            <div>
                <span>제목</span>
                <input type="text" name="foodTitle" value={foodTitle} onChange={onChange} />
            </div>
            <div>
                <span>작성자</span>
                <input
                    type="text"
                    name="foodUserId"
                    value={foodUserId}
                />
            </div>
            <div>
                <span>내용</span>
                <textarea
                    name="foodContent"
                    cols="30"
                    rows="20"
                    value={foodContent}
                    onChange={onChange}
                ></textarea>
            </div>
            <div>
                <button onClick={saveBoard}>저장</button>
                <button onClick={backToList}>돌아가기</button>
            </div>
        </div>
    );
};

export default BoardWrite;