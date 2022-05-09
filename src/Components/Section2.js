import React from 'react'

export default function Section2() {
  return (
    <div className="section2">
    <div className="section-about">
      <h1>What I can do.</h1>
      <div className="box1">
        <div className="boximage image1">
          <img src={require("../assets/image/me.png")} alt="" />
        </div>
        <div className="subbox">
          <h2>Design what you want.</h2>
          <h3>
            I like to keep it simple. My goals are to focus on typography,
            content and conveying the message that you want to send.
          </h3>
        </div>
      </div>
      <div className="box2">
        <div className="subbox">
          <h2>Develop what you need.</h2>
          <h3>
            I'm a developer, so I know how to create your website to run
            across devices using the latest technologies available.
          </h3>
        </div>
        <div className="boximage image2">
          <img src={require("../assets/image/me-dev.png")} alt="" />
        </div>
      </div>
    </div>
  </div>
  )
}
