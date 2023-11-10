import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from "axios";
import Tr from "../component/Tr";
import Button from '../component/Button';
import './BoardList.css';

const BoardList = () => {
  const navigate = useNavigate();
  const [boardList, setBoardList] = useState([]);

  const getBoardList = async () => {
    try {
      const resp = await axios.get('//localhost:5000/api/foodboards');
      const data = resp.data;
      console.log(data);
      setBoardList(data);
    } catch (error) {
      console.error('데이터 오류 발생:', error);
    }
  }

  const writeBoard = () => {
    navigate("/write")
  }

  useEffect(() => {
    getBoardList();
  }, []);

  return (
    <div>
    <div className="container">
      <div className="board-name">맛집 정보 게시판</div>
      <table className="table">
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일시</th>
          </tr>
        </thead>
        <Tr boardList={boardList} />
      </table>
      <div>
        <Button text="글쓰기" clickValue={writeBoard} />
      </div>
    </div>
  </div>
  );
};

export default BoardList;