import React from "react";
import { Link } from "react-router-dom";

const Td = ({board}) => {
    return (
        <>
        
        <tr>
            <td>{board.foodId}</td>
            <Link to={`/board/${board.foodId}`}><td>{board.foodTitle}</td></Link>
            <td>{board.userId}</td>
            <td>{board.foodCreatedAt}</td>
        </tr>
        </>
    )
}

export default Td;