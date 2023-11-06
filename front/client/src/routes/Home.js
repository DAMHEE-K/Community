import React from 'react';
import profileImg from '../images/13.png'
import './Home.css'

const Home = () => {
  return (
  <div className='container'>
    <div className='profile-img-div'>
      <h2>Profile</h2>
      <div>
        <img src={profileImg} alt="" />
      </div>
    </div>
    <div className='introduce-div'>
      <div className='introduce-right'>
        <div>
          <h4>About Me</h4>
          <p>김담희</p>
          <p>Email: dh_kim0908@daum.net</p>
        </div>
        <div>
          <h4>License</h4>
          <p>23.06.30 SQLD</p>
          <p>23.03.21 정보처리기사(필기)</p>
          <p>21.05.07 컴퓨터활용 2급</p>
        </div>
        <div>
          <h4>Education</h4>
          <p>23.02.20 - 23.09.06 KH정보교육원 Java기반 풀스택 웹 개발 과정</p>
        </div>
      </div>
      <div className='introduce-left'>
        <div className='skill-section'>
          <h4>Skill</h4>
          <div>
              <div className='skill-title-div'>Backend</div>
              <p>Java</p>
              <p>Spring boot</p>
              <p>Oracle</p>
          </div>
          <div>
              <div className='skill-title-div'>Frontend</div>
              <p>Javascript</p>
              <p>JSP</p>
              <p>React</p>
              <p>html & css</p>
          </div>
          <div>
              <div className='skill-title-div'>Etc.</div>
              <p>Github</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;