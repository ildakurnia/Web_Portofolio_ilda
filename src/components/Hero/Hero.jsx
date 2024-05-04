import React, { useState, useEffect } from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const [text, setText] = useState("ilda kurnia");
  const [cursor, setCursor] = useState(false);

  useEffect(() => {
    const typingEffect = async () => {
      for (let i = 0; i < text.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 100));
        setText(text.slice(0, i + 1));
      }
      setCursor(false);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      for (let i = text.length; i > 0; i--) {
        await new Promise((resolve) => setTimeout(resolve, 100));
        setText(text.slice(0, i - 1));
      }
      setCursor(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      typingEffect();
    };
    typingEffect();
  }, []);
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{text}
              {cursor && "|"}</h1>
        <p className={styles.description}>
        As a student majoring in Computer Engineering at Batam State Polytechnic, I have a specific interest in the 
design and development of innovative web applications. Throughout my academic journey, I have actively 
participated in Student Organizations and Project-Based Learning programs, where I successfully 
developed public speaking, problem-solving, and robust teamwork skills. With this background, I am 
proficient in implementing Project-Based Learning (PBL), learning through real-world projects that hold 
personal significance. This approach not only enhances my understanding of the material but also develops 
practical skills relevant to the challenges in daily professional life.
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      
      <img
        src={getImageUrl("hero/ildaa.png")}
        alt="Hero image of me" width={450} height={450} viewbox = "0 0 450 450"
        className={styles.heroImg}
      />
      
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
