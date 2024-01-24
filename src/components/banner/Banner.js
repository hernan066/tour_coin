"use client";

import styles from "./banner.module.css";
import { motion } from "framer-motion";

const menuAnimate = {
  initial: { opacity: 0, y: -50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
};

export const Banner = ({ title, button }) => {
  return (
    <section className={styles.banner_section} id="home">
      <div className={styles.banner_bg}>
        <video
          className={styles.video_bg}
          autoPlay
          /* controls */
          loop
          muted
          preload="true"
        >
          <source
            type="video/mp4"
            src="https://player.vimeo.com/external/182638846.hd.mp4?s=32bdf2fd96d97eda7e57476efdadb1a6cc536cd2&amp;profile_id=119"
          />
        </video>
      </div>
      <div></div>

      <motion.div
        className={styles.banner_title}
        initial={"initial"}
        animate={"animate"}
        transition={{ staggerChildren: 0.2, delayChildren: 0.5 }}
      >
        <motion.h1 variants={menuAnimate}>Tour Coin</motion.h1>
        <motion.h6 variants={menuAnimate}>{title}</motion.h6>
        <motion.button variants={menuAnimate}>{button}</motion.button>
      </motion.div>

      <span className={styles.txt}>Scroll Down</span>
    </section>
  );
};
