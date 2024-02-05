import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import LessonEight from './components/LessonEight'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import store from './redux/store.js'
import { Provider } from 'react-redux';

function App1() {
  return (
    <div>
       <BrowserRouter>
       <Provider store={store}>
       <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='services' element={<Services/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='blog/:id' element={<Blog/>}/>
      </Routes>
       </Provider>
      </BrowserRouter>
    </div>
  )
}

export default App1