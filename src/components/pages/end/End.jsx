import React from "react";
import "./End.css";
import { div } from "framer-motion/client";

const socialLinks = [
  { href: "https://github.com/kirtikayush", iconClass: "fab fa-github" },
  { href: "https://medium.com/@kirtikayush", iconClass: "fab fa-medium" },
  {
    href: "mailto:kirtikayush2000@gmail.com",
    iconClass: "fa-solid fa-envelope",
  },
  {
    href: "mailto:kirtikayush2000@gmail.com",
    iconClass: "fa-brands fa-linkedin",
  },
];

const End = ({ isDark }) => {
  return (
    <>
      <div className={`social-items ${isDark ? "dark" : "light"}`}>
        {socialLinks.map(({ href, iconClass }, index) => (
          <a key={index} href={href} target="_blank" rel="noopener noreferrer">
            <i className={`${iconClass} fa-2x`}></i>
          </a>
        ))}
      </div>
      {/* <div className="credit">Made with love</div> */}
    </>
  );
};

export default End;
