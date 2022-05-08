import "./App.css";
import React, { useState } from "react";

function App() {
  const [userData, setUserData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // Connect With Firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { name, company, email, phone, message } = userData;

    if (
      name === "" ||
      company === "" ||
      email === "" ||
      phone === "" ||
      message === ""
    ) {
      const res = await fetch(
        "https://uiux-yash-default-rtdb.firebaseio.com/usersData.json",
        {
          method: "POST",
          header: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, company, email, phone, message }),
        }
      );

      if (res) {
        setUserData({
          name: "",
          company: "",
          email: "",
          phone: "",
          message: "",
        });
        alert("Data Stored Successfully");
      } else {
        alert("Try Again");
      }
    } else {
      alert("Please Fill All Fields");
    }
  };

  return (
    <>
      <navbar>
        <div className="navbar-container">
          <div className="navbar-logo">
            <a href="index.html">
              <img src={require("./assets/image/logo.png")} alt="logo" />
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
                <a href="https://github.com/yashkolte">
                  <h2>Work</h2>
                </a>
              </li>
              <li>
                <a href="#contact">
                  <h2>Contact</h2>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </navbar>
      <section>
        <div className="left-cloud"></div>
        <div className="right-cloud"></div>
        <div className="section-container" />
        <div className="section-content">
          <h1>I'm Yash</h1>
          <h2>UI/UX Designer</h2>
        </div>
        <div className="bottom-image" />
      </section>
      <section1 id="about">
        <div className="avatar">
          <img src={require("./assets/image/avatar.jpg")} alt="" />
        </div>
        <div className="about-text">
          <h1>Hi.</h1>
          <h2>
            I'm a web designer / developer based in Bhopal, India. I have a
            passion for web design and love to create for web and mobile
            devices.
          </h2>
        </div>
      </section1>
      <section2>
        <div className="section-about">
          <h1>What I can do.</h1>
          <div className="box1">
            <div className="boximage image1">
              <img src={require("./assets/image/me.png")} alt="" />
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
              <img src={require("./assets/image/me-dev.png")} alt="" />
            </div>
          </div>
        </div>
      </section2>
      <section3>
        <div className="hire-me" id="hire-me">
          <h1>I can help.</h1>
          <h2>I’m currently available for freelance work.</h2>
          <h3>
            If you have a project that you want to get started, think you need
            my help with something or just fancy saying hey, then get in touch.
          </h3>
        </div>
      </section3>

      <section-contact id="contact">
        <div className="contactform">
          <div className="contact">
            <h3>Send me a message</h3>
            <div className="alert">Your message has been sent</div>
            <form method="POST" id="contactForm">
              <p>
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={userData.name}
                  onChange={postUserData}
                  id="name"
                  required
                />
              </p>
              <p>
                <label>Company</label>
                <input
                  type="text"
                  name="company"
                  value={userData.company}
                  onChange={postUserData}
                  id="company"
                />
              </p>
              <p>
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={postUserData}
                  id="email"
                  required
                />
              </p>
              <p>
                <label>Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={userData.phone}
                  onChange={postUserData}
                  id="phone"
                />
              </p>
              <p className="full">
                <label>Message</label>
                <textarea
                  name="message"
                  rows="5"
                  value={userData.message}
                  onChange={postUserData}
                  id="message"
                ></textarea>
              </p>
              <p className="full">
                <button type="submit" onClick={submitData}>
                  Submit
                </button>
              </p>
            </form>
          </div>
        </div>
        <div className="contact-detail">
          <h1>Contact us</h1>
          <h2>Im open for any suggestion or just to have a chat</h2>
          <div className="detail-tag">
            <div className="tag-icon">
              <img src={require("./assets/image/address.png")} alt="" />
              <h3>Addres: Bhopal,Madhya Pradesh,IN</h3>
            </div>
            <div className="tag-icon">
              <img src={require("./assets/image/phone.png")} alt="" />
              <h3>Phone: 9111039105</h3>
            </div>
            <div className="tag-icon">
              <img src={require("./assets/image/email.png")} alt="" />
              <h3>Email: uiux.yashkolte@gmailcom</h3>
            </div>
            <div className="tag-icon">
              <img src={require("./assets/image/website.png")} alt="" />
              <h3>Website: </h3>
            </div>
          </div>
        </div>
      </section-contact>

      <footer>
        <div className="navbar-menu footer-menu">
          <ul>
            <li>
              <a href="https://www.instagram.com/yashkolte_/">
                <img src={require("./assets/image/instagram.png")} alt="" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/yashkolte/">
                <img src={require("./assets/image/linkedin.png")} alt="" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/yashkolte_">
                <img src={require("./assets/image/twitter.png")} alt="" />
              </a>
            </li>
            <li>
              <a href="https://t.me/yash_kolte">
                <img src={require("./assets/image/telegram.png")} alt="" />
              </a>
            </li>
            <li>
              <a href="https://in.pinterest.com/yashkolte_">
                <img src={require("./assets/image/pinterest.png")} alt="" />
              </a>
            </li>
            <li>
              <a href="https://github.com/yashkolte">
                <img src={require("./assets/image/github.png")} alt="" />
              </a>
            </li>
          </ul>
        </div>
        <h2>© 2022 Yash kolte. All rights reserved.</h2>
      </footer>
    </>
  );
}

export default App;
