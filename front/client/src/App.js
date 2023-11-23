import './App.css';
import {Route, Routes} from "react-router-dom";
import BoardList from './routes/BoardList';
import Home from "./routes/Home";
import React, { useState } from 'react';
import { Cookies } from 'react-cookie'
import BoardDetail from './routes/BoardDetail';
import BoardWrite from './routes/BoardWrite';
import BoardUpdate from './routes/BoardUpdate';
import UserJoin from './routes/UserJoin';
import UserLogin from './routes/UserLogin';
import Profile from './routes/Profile';
import UserInfo from './routes/UserInfo';


function App() {
  const cookie = new Cookies();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/board" element={<BoardList/>} />
      <Route path="/board/:foodId" element={<BoardDetail/>} />
      <Route path="/write" element={<BoardWrite />} />
      <Route path="/update/:foodId" element={<BoardUpdate />} />
      <Route path="/users/join" element={<UserJoin />} />
      <Route path="/users/login" element={<UserLogin setIsLoggedIn={setIsLoggedIn}/>} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/users/info" element={<UserInfo />} />
    </Routes>
  );
}

export default App;
