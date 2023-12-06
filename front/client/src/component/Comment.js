import React, { useState, useEffect } from "react";
import styles from'./Comment.module.css';

const Comment = ({ userId, content }) => {

    return (
        <div>
            <div className={styles.userId}>{userId}</div>
            <div className={styles.content}>{content}</div>
        </div>
    )
}

export default Comment;