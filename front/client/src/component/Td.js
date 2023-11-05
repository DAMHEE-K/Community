import React from "react";
import { Link } from "react-router-dom";

const Td = ({board}) => {
    return (
        <tr>
            <td>{board.foodId}</td>
            <td>
                <Link to={`/board/${board.foodId}`}>
                    {board.foodTitle}
                </Link>
            </td>
            <td>{board.userId}</td>
            <td>{board.foodCreatedAt}</td>
        </tr>
    )
}

export default Td;