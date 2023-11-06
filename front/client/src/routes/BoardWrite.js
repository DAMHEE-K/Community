import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BoardWrite = () => {
    const navigate = useNavigate();

    const [board, setBoard] = useState({
        foodTitle : '',
        foodContent : '',
        foodUserId : 'user1',
    });

    const [imageFile, setImageFile] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setImageFile(file);
    };


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

        if (imageFile) {
            formData.append("images", imageFile);
        }

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
        <div className="container mt-5">
        <div className="border p-4">
            <h1>글 작성</h1>
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
                value={foodUserId}
                className="form-control"
            />
            </div>
            <div className="mb-3">
            <label htmlFor="images" className="form-label">이미지 업로드</label>
            <input
                name="images"
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                onChange={handleImageChange}
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
            <button onClick={saveBoard} className="btn btn-primary">저장</button>
            <button onClick={backToList} className="btn btn-secondary">돌아가기</button>
            </div>
        </div>
        </div>

    );
};

export default BoardWrite;