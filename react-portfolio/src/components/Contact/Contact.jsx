import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel Free to reach out</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
        <img src={getImageUrl("contact/emailIcon.png")} alt="email-icon" />
          <a href="mailto:apilneupane19@gmail.com">Go to my email</a>
        </li>
        <li  className={styles.link}>
        <img src={getImageUrl("contact/githubIcon.png")} alt="github-icon" />
          <a href="https://github.com/apil-dotcom">github.com/apil</a>
        </li>
        <li  className={styles.link}>
        <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedin-icon" />
          <a href="https://github.com/apil-dotcom">linkedin.com/apil</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
