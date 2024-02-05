import React, { useState } from 'react'

function LessonFour() {
    const [color, setColor] = useState('white')
    const [bgcolor, setBgColor] = useState('blue')
    const [padding, setPadding] = useState('20px')
    const [fontsize, setFontSize] = useState('70px')

  return (
    <div>
        <h1 style={{fontSize: fontsize, color: color, backgroundColor: bgcolor, padding: padding}}>Welcome To Alabian Solutions</h1>
        <button onClick={()=>setColor('yellow')}>Update Color</button>
        <button onClick={()=>setBgColor('red')}>Update BgColor</button>
         <button onClick={()=>setPadding('30px')}>Update Padding</button>
        <button onClick={()=>setFontSize('15px')}>Update fontSize</button>
    </div>
  )
}

export default LessonFour