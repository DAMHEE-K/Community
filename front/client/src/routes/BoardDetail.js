import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Board from '../component/Board'
import Comment from "../component/Comment";
import Button from "../component/Button";

const BoardDetail = () => {
    const navigate = useNavigate();

    const { foodId } = useParams();
    const [loading, setLoading] = useState(true);
    const [board, setBoard] = useState({});
    const [comments, setComments] = useState([]);

    const [newComment, setNewComment] = useState({
        userId : "user1",
        content: "",
    });


    const getBoard = async() => {
        const boardResp = await axios.get(`//localhost:5000/boards/${foodId}`);
        const commentResp = await axios.get(`//localhost:5000/comments/${foodId}`);

        const boardData = boardResp.data;
        const commentData = commentResp.data;

        setBoard(boardData);
        setComments(commentData)
        setLoading(false);
    }

    const handleCommentChange = (e) => {
        const { name, value } = e.target;
        setNewComment({
            ...newComment,
            [name] : value,
        });
    };

    const saveComment = async() => {
        const jsonData = {
            userId : newComment.userId,
            content : newComment.content,
        };
        
        await axios.post(`//localhost:5000/comments/${foodId}`, jsonData, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => {
            alert("댓글이 등록되었습니다.");
            navigate(`/board`);
        });
    };

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
                    <div>
                        <label htmlFor="userId">UserId : </label>
                        <input
                            type="text"
                            id="userId"
                            name="userId"
                            value="user1"
                            required
                        />
                        <label htmlFor="content"></label>
                        <textarea 
                            id="content"
                            name="content"
                            value={newComment.content}
                            onChange={handleCommentChange}
                            placeholder="댓글을 입력하세요"
                        />
                        <Button text="등록" clickValue={saveComment}/>
                    </div>
                </>
            )}
        </div>
    );
};

export default BoardDetail;