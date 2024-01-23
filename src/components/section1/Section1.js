"use client";
import styles from "./section1.module.css";
import { motion } from "framer-motion";

export const scrollAnimateUp = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 2,
    },
  },
};

export const Section1 = ({ translations }) => {
  const { title1, title2, text_1_1, text_1_2, text_2_1, text_2_2, button } =
    translations;
  return (
    <section className={styles.container} id="tour_coin">
      <div className={styles.img}>
        <div className={styles.img_cover}></div>
        <div className={styles.bg}></div>
      </div>
      <div className={styles.wrapper}>
        <motion.h2
          initial={"initial"}
          whileInView={"animate"}
          viewport={{ amount: 0.2, once: true }}
          variants={scrollAnimateUp}
        >
          {title1}
        </motion.h2>
        <motion.div
          initial={"initial"}
          whileInView={"animate"}
          viewport={{ amount: 0.2, once: true }}
          variants={scrollAnimateUp}
        >
          <p>{text_1_1}</p>

          <p>{text_1_2}</p>
        </motion.div>
        <motion.h2
          style={{ marginTop: "100px" }}
          initial={"initial"}
          whileInView={"animate"}
          viewport={{ amount: 0.2, once: true }}
          variants={scrollAnimateUp}
        >
          {title2}
        </motion.h2>
        <motion.div
          initial={"initial"}
          whileInView={"animate"}
          viewport={{ amount: 0.2, once: true }}
          variants={scrollAnimateUp}
        >
          <p>{text_2_1}</p>
          <p>{text_2_2}</p>
        </motion.div>

        <motion.button
          initial={"initial"}
          whileInView={"animate"}
          viewport={{ amount: 0.2, once: true }}
          variants={scrollAnimateUp}
        >
          {button}
        </motion.button>
      </div>
    </section>
  );
};
