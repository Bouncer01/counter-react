import React, { useEffect, useState } from 'react'

function LessonThree() {
   const [counter, setCounter] = useState(0)
   
    useEffect(()=>{
        console.log("Triggered me!");
    }, [])
  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={()=>setCounter(counter + 1)}>Count</button>
    </div>
  )
}

export default LessonThree