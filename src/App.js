// // // // import React from 'react'
// // // // import Country from './Country'
// // // // import News from './News'
// // // // import style from './style.css'

// // // // function App() {
// // // //   return (
// // // //     <>
// // // //        <h1 style={{ color: "white", backgroundColor: "green", padding: 20}}>
// // // //         Hello Nigeria
// // // //         </h1>
// // // //       <Country />
// // // //       <News name="sport" club="Manchester United" Afcon="nigeria" />
// // // //       <News />
// // // //       <News />
// // // //       <News />
// // // //       <News />
// // // //     </>
    
// // // //   )
// // // // }

// // // // export default App


// // // import React, { useState } from "react";


// // // function App() {
// // //   const [name, setName] = useState("Ernest");
// // //   const [number, setNumber] = useState(0);
// // //   const [isLoading, setLoading] = useState(true);
// // //   const [users, setUsers] = useState([]);
// // //   const [items, setItem] = useState({
// // //     name: "Shola",
// // //     job: "Software Developer",
// // //     company: "Google"
// // //   });

// // //   return (
// // //     <div>
// // //       <h1>{name}</h1>
// // //       <h1>{number}</h1>
// // //       {isLoading ? (
// // //         <button onClick={() => setName("Blessing")}>Update Name</button>
// // //       ) : (
// // //         <button onClick={() => setNumber(5)}>Update Number</button>
// // //       )}
// // //        <button onClick={() => setLoading(false)}>Update Loader</button>
// // //        <h2>{items.name} is a {items.job} working in {items.company  } </h2>
// // //     </div>
// // //   )
// // // }

// // // export default App




// // import React from 'react'

// // // function Map() {
// // //     const students = ["Peter", "Mary", "Andrew", "John", "Ibrahim"];



// // //   return (
// // //     <div>
// // //         {students.map((ernest, index) => {
// // //             return (
// // //                 <div key={index}>
// // //                     <h1>{ernest}</h1>
// // //                 </div>
// // //             );
// // //         })}
// // //     </div>
// // //   );
// // // }

// // // export default Map

// // function Map() {
// //  const data = [
// //     { id: 1, name: "John Doe" },
// //     { id: 2, name: "Victor Wayne" },
// //     { id: 3, name: "Jane Doe" },
// //     ];



// // return (
// //   <div>
// //       {data.map((ernest) => {
// //           return (
//               <div key={data.id}>
//                   <h1>{ernest.id}</h1>
//                   <h1>{ernest.name }</h1>
//               </div>
// //           );
// //       })}
// //   </div>
// // );
// // }

// // export default Map


// import React, { useEffect, useState } from 'react'

// function App() {

//   const [products, setProducts] = useState([]);
//   const getAllProduct = async () => {
//   const response = await fetch("https://fakestoreapi.com/products");
//   const data = await response.json();
//   setProducts(data);
//   };

//   useEffect(() => {
//     getAllProduct();
//   }, []);

//   return (
//     <div>App
//       {products.map((ernest) => {
//         return (
//           <div key={ernest.id}> 
//              <h1>{ernest.id}</h1>
//              <h1>
//               <img src={ernest.image} alt="" width={100} height = {100} />
//              </h1>
//              <h3>{ernest.title}</h3>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default App


// import React from 'react'
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
// import Header from "./components/Header.js";
// import Carousel from "./components/Carousel.js";
// import Content from "./components/Content.js";
// import Footer from "./components/Footer.js";


// function App() {
//   return (
//     <div>
//       {/* <Header/>
//       <Carousel/>
//       <Content/>
//       <Footer/> */}
//       <Header/>
//       <Carousel/>
//       <Content/>
//       <Footer/>
      
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
// import Navbar from './components/Navbar.js';
// import Content1 from './components/Content1.js';
// import Footer1 from './components/Footer1.js';
// import styles from './components/styles.css'
// function App() {
//   return (
//     <div>
//       <Navbar/>
//       <Content1/>
//       <Footer1/>

//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
// import LessonOne from './components/LessonOne'
// import LessonTwo from './components/LessonTwo'
// import LessonThree from './components/LessonThree'
// import LessonFour from './components/LessonFour'
// import LessonFive from './components/LessonFive'
// import LessonSix from './components/LessonSix'
// import LessonSeven from './components/LessonSeven'

// function App() {

//   return (
//     <div>
//       <LessonOne/>
//       <LessonTwo/>
//       <LessonThree/>
//       <LessonFour/>
//       <LessonFive/>
//       <LessonSix/>
//       <LessonSeven/>

//     </div>
//   )
// }

// export default App


import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Navbar from './components/Navbar'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import Carousel from "./components/Carousel.js";
import Team from './components/Team.js'
import style from './style.css'
import Courses from "./components/Courses.js"

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Carousel/>
      <Team/>
      <Courses/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='services' element={<Services/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='blog/:id' element={<Blog/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App