import React from 'react'

export default function Footer() {
  return (
    <footer>
    <div className="navbar-menu footer-menu">
      <ul>
        <li>
          <a href="https://www.instagram.com/yashkolte_/">
            <img src={require("../assets/image/instagram.png")} alt="" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/yashkolte/">
            <img src={require("../assets/image/linkedin.png")} alt="" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/yashkolte_">
            <img src={require("../assets/image/twitter.png")} alt="" />
          </a>
        </li>
        <li>
          <a href="https://t.me/yash_kolte">
            <img src={require("../assets/image/telegram.png")} alt="" />
          </a>
        </li>
        <li>
          <a href="https://in.pinterest.com/yashkolte_">
            <img src={require("../assets/image/pinterest.png")} alt="" />
          </a>
        </li>
        <li>
          <a href="https://github.com/yashkolte">
            <img src={require("../assets/image/github.png")} alt="" />
          </a>
        </li>
      </ul>
    </div>
    <h2>Copyright © 2022 uiux-yash.web.app</h2>
    <h2> All rights reserved.</h2>
  </footer>
  )
}
