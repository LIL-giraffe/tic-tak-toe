import React, { useState } from 'react'
import Square from './Square'

const Board = () => {
    const [state, setState] = useState(Array(9).fill(null))

    const [isXturn, setIsXTurn] = useState(true)

    const handleClick = (index) => {
        if (state[index] !== null) {
            return
        }
        const copyState = [...state]
        copyState[index] = isXturn ? "X" : "O"
        setState(copyState)
        setIsXTurn(!isXturn)
    }
    const winnerLogic = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for (let logic of winnerLogic) {
            const [a, b, c] = logic
            if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
                return state[a]
            }
        }
        return false
    }

    const isWinner = winnerLogic()

    const reset = () => {
        setState(Array(9).fill(null))
    }

    return (
        <div className=' '>
            {isWinner ? (<>{isWinner} won the game <button className=' mx-2 p-2 rounded-lg bg-red-300' onClick={reset}>Play Again</button></>) :
                (<>
                    <h1 className=' my-4 font-bold' >Player {isXturn ? "X" : "O"} your turn</h1>
                    <div className=' flex items-center  '>
                        <Square click={() => handleClick(0)} value={state[0]} />
                        <Square click={() => handleClick(1)} value={state[1]} />
                        <Square click={() => handleClick(2)} value={state[2]} />

                    </div>
                    <div className='flex items-center  '>
                        <Square click={() => handleClick(3)} value={state[3]} />
                        <Square click={() => handleClick(4)} value={state[4]} />
                        <Square click={() => handleClick(5)} value={state[5]} />
                    </div>
                    <div className='flex items-center '>
                        <Square click={() => handleClick(6)} value={state[6]} />
                        <Square click={() => handleClick(7)} value={state[7]} />
                        <Square click={() => handleClick(8)} value={state[8]} />
                    </div>
                </>)
            }
        </div>
    )
}

export default Board