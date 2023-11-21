import axios from "axios";
import React, { useState, useEffect } from "react";
import Button from "../component/Button";

const UserInfo = () => {
  const token = localStorage.getItem("authorization");
  const [userInfo, setUserInfo] = useState(null);

  const getUserInfo = async () => {
    try {
      if (token) {
        const resp = await axios.get(`http://localhost:5000/user-info`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserInfo(resp.data);
        console.log(resp.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, [token]);

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
                  readOnly
                  required
                />
              </div>
              <div>
                <label htmlFor="password">비밀번호</label>
                <input
                  type="password"
                  id="password"
                  name="password"
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
                  readOnly
                  required
                />
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default UserInfo;
