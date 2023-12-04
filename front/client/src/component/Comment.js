import React, { useState, useEffect } from "react";
import Button from "./Button";
import styles from'./Comment.module.css';

const Comment = ({ userId, content }) => {

    return (
        <div className={styles.comment}>
            <div className={styles.userId}>{userId}</div>
            <div className={styles.content}>{content}</div>
        </div>
    )
}

export default Comment;