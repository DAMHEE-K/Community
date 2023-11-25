import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../component/Button";
import './UserInfo.module.css';

const UserInfo = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("authorization");
  const [userInfo, setUserInfo] = useState(null);

  const getUserInfo = async () => {
    try {
      if (token) {
        const resp = await axios.get(`http://localhost:5000/users/info`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserInfo(resp.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name] : value,
    });
  };

  useEffect(() => {
    getUserInfo();
  }, [token]);

  const updateUser = async() => {
    const resp = await axios.patch(`//localhost:5000/users`, userInfo, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((resp) => {
      alert("수정이 완료되었습니다.");
      navigate('/users/info');
    })
  }

  return (
    <div className="container">
      <div className="user-info">
        <form>
          {userInfo && (
            <>
              <div>
                <label htmlFor="userId">ID</label>
                <input
                  type="text"
                  id="userId"
                  name="userId"
                  value={userInfo.userId}
                  readOnly
                  required
                />
              </div>
              <div>
                <label htmlFor="username">사용자 이름</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={userInfo.username}
                  readOnly
                  required
                />
              </div>
              <div>
                <label htmlFor="email">이메일 주소</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={userInfo.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="password">비밀번호</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="phone">핸드폰 번호</label>
                <input
                  type="phone"
                  id="phone"
                  name="phone"
                  value={userInfo.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Button text="수정" clickValue={updateUser} />
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default UserInfo;
