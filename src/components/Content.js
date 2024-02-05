import React from 'react'

function Content() {
    const showMessage = () => {
        alert("This is Nigeria");
    };

    const showMessagee = () => {
        alert("Hello World");
    };

  return (
    <div>
      <p>
      Dearest love of mine, there is not a star in the expanse of the universe that could shine as bright as you do. 
      I hope that you have the best possible day and the sweetest dreams tonight.
      You are astonishing. ...
      Every day with you brings new gifts into my life. <br></br>

      Dearest love of mine, there is not a star in the expanse of the universe that could shine as bright as you do. 
      I hope that you have the best possible day and the sweetest dreams tonight.
      You are astonishing. ...
      Every day with you brings new gifts into my life.

      </p>

        < button className='btn btn-primary' onClick={showMessage}> 
            Read more...</button>   

            < button className='btn btn-primary' onClick={showMessagee}> 
            Read more...</button>   
    </div>
  )
}

export default Content