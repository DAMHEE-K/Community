import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Button from "../component/Button";

const BoardUpdate = () => {
    const navigate = useNavigate();
    const { foodId } = useParams();
    const [board, setBoard] = useState({
        foodTitle: '',
        userId: '',
        foodContent: ''
    });

    const { foodTitle, userId, foodContent } = board;

    console.log(board);

    const onChange = (event) => {
        const { value, name } = event.target;
        setBoard({
            ...board,
            [name] : value,
        });
    };

    const getBoard = async() => {
        const resp = await axios.get(`//localhost:5000/boards/${foodId}`)
        const data = resp.data;
        setBoard(data);
    };

    const updateBoard = async() => {
        const formData = new FormData();
        formData.append('foodTitle', foodTitle);
        formData.append('foodContent', foodContent);
        formData.append('foodUserId', userId);

        await axios.patch(`//localhost:5000/boards/${foodId}`, 
        formData,
        {
            headers: {
                'Content-Type' : 'multipart/form-data'
            },
        }).then((resp) => {
            alert("수정되었습니다.");
            navigate('/board/' + foodId);
        });
    };

    const backToDetail = () => {
        navigate('/board/' + foodId);
    };

    useEffect(() => {
        getBoard();
    }, []);

    return (
    <div className="container mt-5">
    <div className="border p-4">
        <h1>글 수정</h1>
        <div className="mb-3">
        <label htmlFor="foodTitle" className="form-label">제목</label>
        <input
            type="text"
            name="foodTitle"
            value={foodTitle}
            onChange={onChange}
            className="form-control"
        />
        </div>
        <div className="mb-3">
        <label htmlFor="foodUserId" className="form-label">작성자</label>
        <input
            type="text"
            name="foodUserId"
            value={userId}
            readOnly={true}
            className="form-control"
        />
        </div>
        <div className="mb-3">
        <label htmlFor="foodContent" className="form-label">내용</label>
        <textarea
            name="foodContent"
            cols="30"
            rows="20"
            value={foodContent}
            onChange={onChange}
            className="form-control"
        ></textarea>
        </div>
        <div className="d-flex justify-content-between">
            <Button text="수정" clickValue={updateBoard}/>
            <Button text="취소" clickValue={backToDetail}/>
        </div>
    </div>
    </div>

    )
}

export default BoardUpdate;