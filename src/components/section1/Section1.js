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
            src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/PhotoReal_A_person_riding_a_jet_ski_in_the_ocean_0%20(1)_animation_LQKxRyrZe.mp4?updatedAt=1706060286814"
          />
        </video>
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
        <div className={styles.text_2}>
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
        </div>

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
