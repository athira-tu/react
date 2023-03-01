import React, { useState } from 'react'

function Counter() {
    // let count = 1
    const [count, setcount] = useState(0)
    function changecount() {
        setcount(count + 1)
        // count = count + 1
        console.log(count)
    }
    return (
        <div className='div'>
            <p>{count}</p>
            <button onClick={changecount}>click</button>
        </div>
    )
}

export default Counter