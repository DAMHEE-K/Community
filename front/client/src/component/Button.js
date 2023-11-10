import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({text, clickValue}) => {
    const navigate = useNavigate();

    console.log(clickValue);

    const onClick = () => {
        if (clickValue && typeof clickValue === 'function') {
            clickValue();
        }
    };

    console.log(onClick);
    return (
        <button style={{
            backgroundColor: "rgb(127, 157, 222)",
            color: "white",
            padding: "10px 10px",
            border: 0,
            borderRadius: 10,
            cursor: "pointer",
            margin: 10,
            fontSize: 13,
            
        }} onClick={onClick}>{text}</button>
    );
};
export default Button;