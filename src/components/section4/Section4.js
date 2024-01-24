"use client";
/* eslint-disable @next/next/no-img-element */

import styles from "./section4.module.css";
import { motion } from "framer-motion";

export const Section4 = ({ translations }) => {
  const { title, active_1, active_2, active_3 } = translations;
  return (
    <section className={styles.container} id="actives">
      <h2>{title}</h2>
      <div>
        <div className={styles.cards_container}>
          <div className={styles.card}>
            <motion.h4
              initial={{ opacity: 0, x: "-50%", y: "40%" }}
              whileInView={{
                opacity: 1,
                x: "-50%",
                y: "-50%",
                transition: {
                  duration: 2,
                  delay: 0.3,
                  type: "spring",
                  bounce: 0.4,
                },
              }}
              viewport={{ once: false, amount: 0.6 }}
            >
              {active_1}
            </motion.h4>
            <div className={styles.img_container}>
              <img
                src="https://static.wixstatic.com/media/74f558_993f041afc4045c69c824d6022d78ca0~mv2_d_4000_2667_s_4_2.jpeg"
                alt="imagen"
              />
            </div>
          </div>
          <div className={styles.card}>
            <motion.h4
              initial={{ opacity: 0, x: "-50%", y: "40%" }}
              whileInView={{
                opacity: 1,
                x: "-50%",
                y: "-50%",
                transition: {
                  duration: 2,
                  delay: 0.6,
                  type: "spring",
                  bounce: 0.4,
                },
              }}
              viewport={{ once: false, amount: 0.2 }}
            >
              {active_2}
            </motion.h4>
            <div className={styles.img_container}>
              <img
                src="https://www.abasturhub.com/img/blog/mejores-restaurantes---diseno-sin-titulo.jpg"
                alt="imagen"
              />
            </div>
          </div>
          <div className={styles.card}>
            <motion.h4
              initial={{ opacity: 0, x: "-50%", y: "40%" }}
              whileInView={{
                opacity: 1,
                x: "-50%",
                y: "-50%",
                transition: {
                  duration: 2,
                  delay: 0.9,
                  type: "spring",
                  bounce: 0.4,
                },
              }}
              viewport={{ once: false, amount: 0.2 }}
            >
              {active_3}
            </motion.h4>
            <div className={styles.img_container}>
              <img
                src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/PhotoReal_A_family_walking_on_a_hill_in_summer_clothes_overloo_3_rwT-Jln97.jpg?updatedAt=1705774785446"
                alt="imagen"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
