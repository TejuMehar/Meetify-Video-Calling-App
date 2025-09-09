import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'


export default function landingPage() {
  return (
    <div className='landingPageContainer'>
        <nav>
             <div className='navHeader'>
               <h2>Meetify Video Call</h2>
             </div>
             <div className='navlist'>
              <p>Join as Guest</p>
              <p>Register</p>
              <div role='button'>
                <p>Login</p>
              </div>
             </div>
        </nav>

        <div className="landingMainContainer">
            <div>
              <h1> <span style={{color: "#FF9839"}}>Connect</span> With Your loved Ones</h1>

              <p>Cover a Distance by Meetify Video Call </p>
               <div role='button'>
                  <Link to={"/auth"}>Get Started</Link>
               </div>
            </div>
            <div>
              <img src="/mobile.png" alt="" />
            </div>
        </div>
    </div>
  )
}
