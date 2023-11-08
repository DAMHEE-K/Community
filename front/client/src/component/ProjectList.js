import React from "react";
import {Link} from "react-router-dom";
import logo1 from '../images/logo.png'
import logo2 from '../images/logo2.png'
import './ProjectList.css';

const ProjectList = () => {
    return(
      <div className="prjs-div">
        <ul>
            <Link className="github-link" to="https://github.com/DAMHEE-K/pet_shopping_mall">
            <li>
                <div className="prjs-small-div">
                    <img src={logo1} className="prjs-img" />
                    <p>우동친 : 온라인 쇼핑몰</p>
                </div>
            </li>
            </Link>
            <Link className="github-link" to="https://github.com/DAMHEE-K/hairball">
            <li>
                <div className="prjs-small-div">
                    <img src={logo2} className="prjs-img" />
                    <p>털뭉치들 : 반려동물 입양 사이트</p>
                </div>
            </li>
            </Link>
        </ul>
      </div>  
    );
};

export default ProjectList;