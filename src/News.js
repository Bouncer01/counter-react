import React from 'react'

function News(props) {
    const myStyle = {
        color: "white",
        backgroundColor: "black",
        padding: "10px"

    }
  return (
    <div>
         <h1>News On The Hour</h1>
         <h2>I love {props.name}</h2>
         <h2>I love {props.club}</h2>


         <h1 style={myStyle}>Political Arena</h1>
    </div>
   

  )
}

export default News