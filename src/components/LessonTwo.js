import React, { useState } from 'react'

function LessonTwo() {
    const [profile, setProfie] = useState({
        name: "John Doe",
        job: "Web Developer",
        company: "Microsoft",
    })
    //create a function to update a PERSON'S PROFILE
    function updateProfile(){
        setProfie({...profile, company: "Google"})
    }


  return (
    <div>
        <h1>My Name Is {profile.name}</h1>
        <h2>{profile.name} works @ {profile.company}</h2>
        <button onClick={updateProfile}>Update Profile</button>

    </div>
  )
}

export default LessonTwo