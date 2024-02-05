import React, { useState } from 'react'
import "./style/style.css"

function LessonSix() {
    const[isLoggedIn, setIsLoggedIn] = useState(false)
    const[showBtn, setShowBtn] = useState(true)
    const [change, setChange] = useState(true)
  return (
    <div>
        {
            isLoggedIn && (<h1>Welcome Peter</h1>)
        }
        <div>
            {
                
                showBtn ? 'Nigeria' : 'Ghana'
            }
        </div>
        <h1 className={change ? 'hello' : 'why'}>Hello world</h1>
        <button onClick={()=>setChange(!change)}>Toggle Class</button> <br></br>
    </div>
  )
}

export default LessonSix