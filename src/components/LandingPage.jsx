import React from 'react'
import { Link } from 'react-router-dom'
const LandingPage = () => {
  return (
   <main>
    <div className='landing-page'>
      <div className="landing-heading">
        <p>Travel your journey with TravelBuddy</p>
        <h1>Trust Our Experience</h1>
        <Link to="/travel"> <button>Explore</button></Link>
      </div>
    </div>
    </main>
  )
}

export default LandingPage