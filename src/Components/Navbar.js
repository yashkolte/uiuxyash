import React from 'react'

export default function Navbar() {
  return (
    <div className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <a href="index.html">
              <img src={require("../assets/image/logo.png")} alt="logo" />
            </a>
          </div>
          <div className="navbar-menu">
            <ul>
              <li>
                <a href="#about">
                  <h2>About</h2>
                </a>
              </li>
              <li>
                <a href="#contact">
                  <h2>Contact</h2>
                </a>
              </li>
              <li>
                <a href="https://github.com/yashkolte">
                  <h2>Work</h2>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  )
}
