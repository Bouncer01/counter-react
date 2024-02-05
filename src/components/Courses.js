import React from 'react'
import Photo9 from "./images/photo9.jpg";

function Courses() {


  return (
    <div>
       <div className='container-fluid '>
        <div className='row'>
          <div className='col-md-4 pt-5'>
            <div class="card" style={{width: '18rem;'}}>
              <img src={Photo9} class="card-img-top" alt="..."/>
              <div class="card-bodied pt-2">
                <h5 class="card-title">Web Development</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
            <div className='col-md-4'>
                
            </div>
            <div className='col-md-4'>
                
            </div>
        </div>

       </div>
    </div>
  )
}

export default Courses