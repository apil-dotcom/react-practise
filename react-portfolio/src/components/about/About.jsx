import React from 'react'
import styles from "./About.module.css";
import { getImageUrl } from '../../utils'

const About = () => {
  return <section className={styles.container} id="about">
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
        <img src={getImageUrl("about/aboutImage.png")} alt="about-image"
        className={styles.aboutImage} />
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt="cursor-image" />
               <div clasName={styles.aboutItemText}>
                <h3>Frontend Developer</h3>
                <p>I am a frontend developer with little experience</p>
               </div>
                </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")} alt="server-image" />
               <div clasName={styles.aboutItemText}>
                <h3>Backend Developer</h3>
                <p>I am a backend developer with little experience</p>
               </div>
                </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/uiIcon.png")} alt="ui-image" />
               <div clasName={styles.aboutItemText}>
                <h3>UI/UX Designer</h3>
                <p>I am a UI/UX designer with little experience</p>
               </div>
                </li>

        </ul>
    </div>
  </section>
}

export default About