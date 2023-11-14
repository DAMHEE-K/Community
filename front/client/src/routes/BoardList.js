import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from "axios";
import Tr from "../component/Tr";
import Button from '../component/Button';
import './BoardList.css';

const BoardList = () => {
  const navigate = useNavigate();
  const [boardList, setBoardList] = useState([]);
  const [keyword, setKeyword] = useState("");

  const onChange = (event) => {
    setKeyword(event.target.value)
  }
  

  const getBoardList = async () => {
    try {
      const resp = await axios.get(`//localhost:5000/api/foodboards`);
      const data = resp.data;
      console.log("Data fetched:", data);
      setBoardList(data);
    } catch (error) {
      console.error('데이터 오류 발생:', error);
    }
  };

  const writeBoard = () => {
    navigate("/write")
  }

  useEffect(() => {
    getBoardList();
  }, []);

  const searchKeyword = async() => {
    try {
      const resp = await axios.get(`//localhost:5000/api/foodboards/search?keyword=${keyword}`);
      const data = resp.data;
      setBoardList(data);
     } catch(error) {
      console.error('데이터 오류 발생:', error);
     }
  }

  return (
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
        {
          boardList.length>0 ? <Tr boardList={boardList} /> : <tbody className='notification'><tr><td>조회된 결과가 없습니다.</td></tr></tbody>
        }
      </table>
      <div>
        <input 
          type='text' 
          value={keyword} 
          onChange={onChange} 
          placeholder='검색어를 입력하세요'>  
        </input>
        <Button text="검색" value={keyword} clickValue={searchKeyword}/>
      </div>
      <div>
        <Button text="글쓰기" clickValue={writeBoard} />
      </div>
    </div>
  );
};

export default BoardList;