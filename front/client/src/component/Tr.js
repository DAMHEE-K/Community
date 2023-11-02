import React from 'react';
import Td from './Td';

const Tr = ({boardList}) => {
    return (
        <tbody>
            {
                boardList.map(board => {
                    return (
                        <Td key={board.foodId} board={board} />
                    )
                })
            }
        </tbody>
    )
}

export default Tr;