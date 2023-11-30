import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '.css';
import Button from "../component/Button";


const UserJoin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userId: "",
    username: "",
    email: "",
    password: "",
    phone : "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
  };


  const joinUser = async() => {
    const userData = {
        userId: formData.userId,
        name: formData.username,
        password: formData.password,
        email: formData.email,
        phone: formData.phone,
      };

    const resp = await axios.post("//localhost:5000/users/join", userData, {
        headers: {
            "Content-Type": "application/json",
        },
    }).then((resp) => {
        alert("회원가입 완료되었습니다.");
        navigate('/');
    });
  }



  return (
<div className="container">
  <h1>회원가입</h1>
  <form className="registration-form" onSubmit={handleRegistrationSubmit}>
    <div>
      <label htmlFor="userId">ID</label>
      <input
        type="text"
        id="userId"
        name="userId"
        value={formData.userId}
        onChange={handleChange}
        required
      />
    </div>
    <div>
      <label htmlFor="username">사용자 이름</label>
      <input
        type="text"
        id="username"
        name="username"
        value={formData.username}
        onChange={handleChange}
        required
      />
    </div>
    <div>
      <label htmlFor="email">이메일 주소</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
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
        value={formData.password}
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
        value={formData.phone}
        onChange={handleChange}
        required
      />
    </div>
    <Button text="가입" clickValue={joinUser} />
  </form>
</div>
  );
};

export default UserJoin;