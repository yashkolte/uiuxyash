import './App.css';

function App() {
  return (
    <>
     <navbar>
     <div className="navbar-container">
         <div className="navbar-logo">
             <a href="index.html">
                 <img src={require("./assets/image/logo.png")} alt="logo"/>
             </a>
         </div>
         <div className="navbar-menu">
             <ul>
                 <li><a href="about.html">About</a></li>
                 <li><a href="https://github.com/yashkolte">Work</a></li>
                 <li><a href="#contactform">Contact</a></li>
             </ul>
         </div>
     </div>
 </navbar>
 <section>
        <div className="left-cloud"></div>
        <div className="right-cloud"></div>
        <div className="section-container"/>
            <div className="section-content">
                <h1>I'm Yash</h1>
                <h2>UI/UX Designer</h2>
            </div>
            <div className="bottom-image" />
            
    </section>
    <section1>
        <div className="avatar">
            <img src={require("./assets/image/avatar.jpg")} alt=""/>
        </div>
            <div className="about-text">
                <h1>Hi.</h1>
                <h2>
                    I'm a web designer / developer based in Bhopal, India. I have a passion for web design and love to
                    create for web and mobile devices.
                </h2>
            </div>

    </section1>
    <section2>

        <div className="section-about">
            <h1>What I can do.</h1>
            <div className="box1">
                <div className="boximage image1">
                    <img src={require("./assets/image/me.png")} alt=""/>

                </div>
                <div className="subbox">
                    <h2>Design what you want.</h2>
                    <h3>I like to keep it simple. My goals are to focus on typography, content and conveying the message
                        that you want to send.</h3>
                </div>
            </div>
            <div className="box2">
                <div className="subbox">
                    <h2>Develop what you need.</h2>
                    <h3>I'm a developer, so I know how to create your website to run across devices using the latest
                        technologies available.</h3>
                </div>
                <div className="boximage image2">
                    <img src={require("./assets/image/me-dev.png")} alt=""/>

                </div>
            </div>
        </div>
    </section2>
    <section3>
        <div className="hire-me" id="hire-me">

            <h1>I can help.</h1>
            <h2>I’m currently available for freelance work.</h2>
            <h3>If you have a project that you want to get started, think you need my help with something or just fancy
                saying hey, then get in touch.</h3>
        </div>
    </section3>
<section4 id="contactform">
    <div className="contact">
        <h3>Contact Me</h3>
        <div className="alert">Your message has been sent</div>
        <form id="contactForm">
          <p>
            <label>Name</label>
            <input type="text" name="name" id="name" required/>
          </p>
          <p>
            <label>Company</label>
            <input type="text" name="company" id="company"/>
          </p>
          <p>
            <label>Email Address</label>
            <input type="email" name="email" id="email" required/>
          </p>
          <p>
            <label>Phone Number</label>
            <input type="text" name="phone" id="phone"/>
          </p>
          <p className="full">
            <label>Message</label>
            <textarea name="message" rows="5" id="message"></textarea>
          </p>
          <p className="full">
            <button type="submit">Submit</button>
          </p>
        </form>
      </div>
</section4>

    <footer>
        <div className="navbar-menu footer-menu">
            <ul>
                <li><a href="https://www.instagram.com/yashkolte_/"><img src={require("./assets/image/instagram.png")} alt=""/></a></li>
                <li><a href="https://www.linkedin.com/in/yashkolte/"><img src={require("./assets/image/linkedin.png")} alt=""/></a></li>
                <li><a href="https://twitter.com/yashkolte_"><img src={require("./assets/image/twitter.png")} alt=""/></a></li>
                <li><a href="https://t.me/yash_kolte"><img src={require("./assets/image/telegram.png")} alt=""/></a></li>
                <li><a href="https://in.pinterest.com/yashkolte_"><img src={require("./assets/image/pinterest.png")} alt=""/></a></li>
                <li><a href="https://github.com/yashkolte"><img src={require("./assets/image/github.png")} alt=""/></a></li>
            
            </ul>
        </div>
        <h2>© 2022 Yash kolte. All rights reserved.</h2>
    </footer>
 </>
  );
}

export default App;
