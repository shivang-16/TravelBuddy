import React from 'react'
import { Link } from 'react-router-dom'
const LandingPage = () => {
  return (
   <main>
    <div className='landing-page'>
      <div className="landing-heading">
        {/* <p>Travel your journey with TravelBuddy</p> */}
        <p className='heading'>Trust Our <span>Experience</span></p>
        <div className='para'>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, eum in vitae culpa accusamus neque. Nostrum molestiae eos enim, perspiciatis in fugit sed ipsa quisquam sapiente debitis provident dicta rem eligendi quo ab qui?</p>
        </div>
        <Link to="/travel"> <button>Explore</button></Link>
      </div>
    </div>
    </main>
  )
}

export default LandingPage