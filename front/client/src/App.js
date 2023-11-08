import './App.css';
import {Route, Routes} from "react-router-dom";
import BoardList from './routes/BoardList';
import Home from "./routes/Home";
import React from 'react';
import BoardDetail from './routes/BoardDetail';
import BoardWrite from './routes/BoardWrite';
import BoardUpdate from './routes/BoardUpdate';
import UserJoin from './routes/UserJoin';
import UserLogin from './routes/UserLogin';
import Profile from './routes/Profile';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/board" element={<BoardList/>} />
      <Route path="/board/:foodId" element={<BoardDetail/>} />
      <Route path="/write" element={<BoardWrite />} />
      <Route path="/update/:foodId" element={<BoardUpdate />} />
      <Route path="/join" element={<UserJoin />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
