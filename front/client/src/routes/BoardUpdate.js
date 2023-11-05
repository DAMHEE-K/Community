import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

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
        const resp = await axios.get(`//localhost:5000/api/foodboards/${foodId}`)
        const data = resp.data;
        setBoard(data);
    };

    const updateBoard = async() => {
        const formData = new FormData();
        formData.append('foodTitle', foodTitle);
        formData.append('foodContent', foodContent);
        formData.append('foodUserId', userId);

        await axios.patch(`//localhost:5000/api/foodboards/${foodId}`, 
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
        <div>
            <div>
                <h1>글 작성</h1>
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
                    value={userId}
                    readOnly={true}
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
                <button onClick={updateBoard}>수정</button>
                <button onClick={backToDetail}>취소</button>
            </div>
        </div>
    )
}

export default BoardUpdate;