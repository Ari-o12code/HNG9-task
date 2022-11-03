import React from 'react'
import Zurilogo from "../assets/Vector.png"
import I4Glogo from "../assets/I4G.png"

const Footer = () => {
  return (
    <div>
      <footer id="footer-container">
      <hr />
      <div className="footer-contents">
        <img 
        className="zurilogo"
        src={Zurilogo} 
        alt="Zuri Internship logo" />
        <p 
          className="footer-text">
            HNG Internship 9 Frontend Task
        </p>
        <img 
        className="I4Glogo"
        src={I4Glogo} 
        alt="I4G logo" />
      </div>
    </footer>
    </div>
  )
}

export default Footer
