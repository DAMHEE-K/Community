import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

    const resp = await axios.post("//localhost:5000/join", userData, {
        headers: {
            "Content-Type": "application/json",
        },
    }).then((resp) => {
        alert("회원가입 완료되었습니다.");
        navigate('/board');
    });
  }



  return (
    <div className="container mt-5">
      <h1>회원가입</h1>
      <form onSubmit={handleRegistrationSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            ID
          </label>
          <input
            type="text"
            id="userId"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            사용자 이름
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            이메일 주소
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            비밀번호
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            핸드폰 번호
          </label>
          <input
            type="phone"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <button onClick={joinUser} className="btn btn-primary">
          가입
        </button>
      </form>
    </div>
  );
};

export default UserJoin;
