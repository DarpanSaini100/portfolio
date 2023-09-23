import React from 'react';
import {
    AiFillGithub,
    AiFillInstagram,
    AiFillYoutube,
    AiOutlineArrowUp,
  } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://avatars.githubusercontent.com/u/119045542?v=4"}
          alt="Founder"
        />

        <h2>Darpan Saini</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.youtube.com" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a href="https://www.instagram.com/?hl=en" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/DarpanSaini100" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
