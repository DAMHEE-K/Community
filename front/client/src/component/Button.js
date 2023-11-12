import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({text, clickValue}) => {

    const functionName = clickValue.name;

    Button.propTypes = {
        text: PropTypes.string.isRequired,
        clickValue: PropTypes.func,
    }

    const onClick = () => {
        clickValue();
    };

    return (
        <button
            className={functionName.includes("back") ? styles["back-btn"] : styles.btn} 
            onClick={onClick}>{text}</button>
    );
};
export default Button;