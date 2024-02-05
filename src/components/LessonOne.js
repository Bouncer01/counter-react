import React, {useState} from 'react'

function LessonOne() {
    const [name, setName] = useState('Helen')
  
    function ali() {
        setName('Bouncer')
      }

    return (
      <div>
        <h1>My Name is {name}</h1>
        {/* <button onClick={()=>setName('Bouncer')}>Change Name</button> */}
        <button onClick={ali}>Change Name</button>
      </div>
    )
  }
  
  export default LessonOne