import React from 'react'
import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';

const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Apil</h1>
        <p className={styles.description}>I am a beginner react developer .Reach out if you want any development works!
             </p>
             <a className={styles.contactBtn} href="mailto:apilneupane19@gmail.com">Contact Me</a>
    </div>
    <img  className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} alt="profileimage" />
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur}/>
  </section>
}

export default Hero