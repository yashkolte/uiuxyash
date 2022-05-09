import React from 'react'

export default function Section1() {
  return (
    <div className="section1" id="about">
    <div className="avatar">
      <img src={require("../assets/image/avatar.jpg")} alt="" />
    </div>
    <div className="about-text">
      <h1>Hi.</h1>
      <h2>
        I'm a web designer / developer based in Bhopal, India. I have a
        passion for web design and love to create for web and mobile
        devices.
      </h2>
    </div>
  </div>
  )
}
