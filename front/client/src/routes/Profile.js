import React from "react";
import profileImg from '../images/profile.png'
import ProjectList from '../component/ProjectList';
import "./Profile.css";


const Profile = () => {
    return (
        <div className='container'>
          <div className='profile-img-div'>
            <h2>Profile</h2>
            <div>
              <img src={profileImg} alt="" />
            </div>
          </div>
          <ProjectList />
          <div className='introduce-div'>
            <div className='introduce-right'>
              <div>
                <h4>About Me</h4>
                <p>김담희</p>
                <p>dh_kim0908@daum.net</p>
              </div>
              <div>
                <h4>License</h4>
                <p>23.06.30 SQLD</p>
                <p>23.03.21 정보처리기사(필기)</p>
                <p>21.05.07 컴퓨터활용 2급</p>
              </div>
            </div>
            <div className='introduce-left'>
              <div className='skill-section'>
                <h4>Skill</h4>
                <div className='skill-div'>
                    <div className='skill-title-div'>Backend</div>
                    <img src="https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white" />
                    <img src="https://img.shields.io/badge/oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white" /> 
                    <img src="https://img.shields.io/badge/spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white" />
                    <img src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" />
                </div>
                <div className='skill-div'>
                    <div className='skill-title-div'>Frontend</div>
                    <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
                    <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white" /> 
                    <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
                    <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black" /> 
                    <img src="https://img.shields.io/badge/jquery-0769AD?style=for-the-badge&logo=jquery&logoColor=white" />
                </div>
                <div className='skill-div'>
                    <div className='skill-title-div'>Etc.</div>
                    <p><img src="https://img.shields.io/badge/github-858585?style=for-the-badge&logo=github&logoColor=white" /></p>
                </div>
                <div>
                  <h4>Education</h4>
                  <p>23.02.20 - 23.09.06 KH정보교육원 Java기반 풀스택 웹 개발 과정</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        );
}

export default Profile;