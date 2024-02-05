import React, { useState } from 'react'

function LessonFive() {

    const [show, setShow] = useState(false)
    const [color, setColor] = useState('white')
    const [bgcolor, setBgColor] = useState('blue')
    const [padding, setPadding] = useState('20px')
    const [fontsize, setFontSize] = useState('70px')
  return (
    <div>
        {
            show && (
                <>
                <h1 style={{fontSize: fontsize, color: color, backgroundColor: bgcolor, padding: padding}}>Welcome To Alabian Solutions</h1>
                 <button onClick={()=>setColor('yellow')}>Update Color</button>
                </>
            )
        }

        <button onClick={()=>setShow(!show)}>SHOW ALABIAN</button>

    </div>
  )
}

export default LessonFive