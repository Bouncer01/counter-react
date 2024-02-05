import React, { useState } from 'react'

function LessonSeven() {

    //useState function em to validate handle submit
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [username, setUsername] = useState('')
const [matricno, setMatricNo] = useState('')

const [showMsg, setShowMsg] = useState(false)
 const [showEmailMessage, setShowEmailMessage] = useState(false)
 const [showPasswordMessage, setShowPasswordMessage] = useState(false)
const [showUsernameMessage, setShowUsernameMessage] = useState(false)
const [showMatricNoMessage, setShowMatricNoMessage] = useState(false)
const [showSuccess, setShowSuccess] = useState(false)

// created a function to handle submit
const handleSubmit = (e)=> {
    e.preventDefault()
    console.log(email);
    console.log(password);
    console.log(username);
    console.log(matricno);


    //validating fields
    if(email === '' || password === ''){
        // alert("fields cannot ne empty")
        setShowMsg(true)
    }
    if(password.length < 6){
        // alert("password must be at least 6 characters")
        setShowPasswordMessage(true)
        setShowMsg(false)  
    }
    if(username === '') {
        setShowMsg(false)
        setShowPasswordMessage(false)
        setShowUsernameMessage(true)
    }
    if(matricno === '') {
        setShowMsg(false)
        setShowPasswordMessage(false)
        setShowUsernameMessage(false)
        setShowMatricNoMessage(true)
    }

    else{
        // alert("Successfully Registered")
        setShowMsg(false)
        setShowPasswordMessage(false)
        setShowUsernameMessage(false)
        setShowMatricNoMessage(false)
        setShowSuccess(true)
    }
}


    
  return (
    <div>
        
        <div className='container mt-5'>
            <div className='row justify-content-center'>
                <div className='col-md-8'>
                  <form onSubmit={handleSubmit}>
                  <div className='card shadow p-4'>
                              {/* Display Message */}
                              {
                                    showMsg ? (
                                        <div class="alert alert-danger" role="alert">
                                            fields cannot be empty
                                        </div>
                                    ) : ('')
                              }
                               {
                                    showPasswordMessage ? (
                                        <div class="alert alert-danger" role="alert">
                                            Password must be at least 6 characters
                                        </div>
                                    ) : ('')
                               }
                               {
                                    showUsernameMessage ? (
                                        <div class="alert alert-danger" role="alert">
                                            username cannot be empty, you self put username!
                                        </div>
                                    ) : ('')
                              }
                               {
                                    showMatricNoMessage ? (
                                        <div class="alert alert-danger" role="alert">
                                            please, enter your Matriculation Number la!
                                        </div>
                                    ) : ('')
                              }
                              {
                                    showSuccess ? (
                                        <div class="alert alert-success" role="alert">
                                            Registration Successful
                                        </div>
                                    ) : ('')
                               }
                        <h4 className='text-center'>Registration Form</h4>
                        <div className='card-body'>
                        <div class="mb-3">
                            <label class="form-label">Email Address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" 
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)} 
                            >
                            </input>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="password"
                             value={password}
                             onChange={(e)=>setPassword(e.target.value)} 
                            ></input>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Username</label>
                            <input type="username" class="form-control" id="exampleFormControlInput1" placeholder="name@Bouncer01" 
                            value={username} onChange={(e)=>setUsername(e.target.value)}
                        ></input>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Matriculation Number</label>
                            <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="" 
                            value={matricno} onChange={(e)=>setMatricNo(e.target.value)}
                        ></input>
                        </div>
                        <div class="d-grid gap-2">
                            <button class="btn btn-primary" type="submit">Submit</button>
                        </div>
                        </div>
                    </div>
                  </form>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default LessonSeven