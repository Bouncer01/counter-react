import React from 'react'
// import Photo1 from "./images/photo1.jpg";
import "../style.css"
import Photo6 from "./images/photo6.jpg";
// import Photo3 from "./images/photo3.jpg";

function Carousel() {
  return (
    <div>
        {/* // start of banner section */}
        <div className='banner'>
           <div className='row'>
              <div className='banner1'>
                <h1>
                  Leading Today,
                  <br></br>
                  Leading Tomorrow
                </h1>
                  <h5>Class of Alabian Web Development 2023/24 Making Websites With Bootstrap</h5>
                  <button className='btn btn-success'>Get Started</button>
              </div>
           </div>
        </div>
        {/* // end of banner section */}
        <div className='container-fluid'>
          <div className='row'>
            <div class="col-md-6 pt-5">
              <div className='section'>
              <h3>Voluptatem dignissimos provident quasi corporis 
                  voluptates sit assumenda.</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <ul>
                <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li>Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla 
                  pariatur.</li>
              </ul>
              <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
              </div>
            </div>
            <div class="col-md-6 pt-5">
            <img src={Photo6} class="d-block w-100" alt="..." height={400}/>
            </div>

          </div>

        </div>

    </div>
  )
}

export default Carousel