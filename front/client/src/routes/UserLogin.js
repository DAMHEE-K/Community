import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../component/Button";

const UserLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userId : "",
    password : "",
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

  const loginUser = async() => {
    const userData = {
      userId : formData.userId,
      password : formData.password,
    };
    
    try {
      const reps = await axios.post("//localhost:5000/users/login", userData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    
      const token = reps.data;
      localStorage.setItem('authorization', token);
      
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

    return (
    <div className="container">
      <div className="login-form">
          <div>
            <h3>Login</h3>
          </div>
          <div>
            <form onSubmit={handleRegistrationSubmit}>
                <div>
                  <label htmlFor="userId">ID:</label>
                  <input
                    type="text"
                    id="userId"
                    name="userId"
                    onChange={handleChange}
                    placeholder="ID 입력"
                  />
                </div>
                <div>
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={handleChange}
                    placeholder="password 입력"
                  />
                </div>
                <Button text="login" clickValue={loginUser} />
              </form>
          </div>
      </div>
    </div>
    );
  };
  
export default UserLogin;