import React, { useState, useEffect } from 'react';
import profileImg from '../images/profile.png';
import ProjectList from '../component/ProjectList';
import './Home.css';

const Home = () => {
  const [letters, setLetters] = useState('');
  const [count, setCount] = useState(0);
  const text = "DAMHEE's Community";

  useEffect(() => {
      const typingInterval = setInterval(() => {
        setLetters((pretext) => {
          let result = pretext ? pretext + text[count] : text[0];
          setCount(count + 1);

          if(count >= text.length) {
            setCount(0);
            setLetters('');
          }

          return result;
        });
      }, 300);

      return() => {
        clearInterval(typingInterval);
      };
  });

  return (
    <div className='container'>
      <span className='intro-letter'>{letters}</span>
    </div>
  );
};

export default Home;
