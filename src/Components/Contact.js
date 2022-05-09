import React from 'react'
import { useState } from "react";

export default function Contact() {
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
    
        if (name && company && email && phone && message) {
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
              <img src={require("../assets/image/address.png")} alt="" />
              <h3>Addres: Bhopal,Madhya Pradesh,IN</h3>
            </div>
            <div className="tag-icon">
              <img src={require("../assets/image/phone.png")} alt="" />
              <h3>Phone: 9111039105</h3>
            </div>
            <div className="tag-icon">
              <img src={require("../assets/image/email.png")} alt="" />
              <h3>Email: uiux.yashkolte@gmailcom</h3>
            </div>
            <div className="tag-icon">
              <img src={require("../assets/image/website.png")} alt="" />
              <h3>Website: </h3>
            </div>
          </div>
        </div>
      </section-contact>
  )
}
