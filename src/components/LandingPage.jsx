import React from "react";
import arrow from "../images/arrow.gif";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <main>
      <div className="landing-page">
        <div className="landing-heading">
          {/* <p>Travel your journey with TravelBuddy</p> */}
          <p className="heading">
            Trust Our <span>Experience</span>
          </p>
          <div className="para">
            <p>
            Discover your perfect travel companion with Travel Buddy. Connect, plan, and explore the world together, creating unforgettable journeys and lasting memories.Find like-minded adventurers for seamless travels and shared experiences.
            </p>
          </div>
          <Link to="/travel">
            {" "}
            <button>
              Explore <img src={arrow} />
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
