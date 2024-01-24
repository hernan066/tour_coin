"use client";
/* eslint-disable @next/next/no-img-element */

import styles from "./section3.module.css";
import { motion } from "framer-motion";

export const Section3 = ({ translations }) => {
  const { title, text } = translations;
  return (
    <section className={styles.container} id="about">
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1.5,
                delay: 0.3,
                type: "spring",
                bounce: 0.4,
              },
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1.5,
                delay: 0.6,
                type: "spring",
                bounce: 0.4,
              },
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {text}
          </motion.p>
        </div>
        <div className={styles.right}>
          <div className={styles.img_wrapper}>
            <img
              src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/EMPRESAS_oNBzCBds5O.png?updatedAt=1705779560595"
              alt="Beach Celso Ramos"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
