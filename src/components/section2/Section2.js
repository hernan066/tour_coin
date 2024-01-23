"use client";
import styles from "./section2.module.css";
import { GoSync } from "react-icons/go";
import { GoFlame } from "react-icons/go";
import { GoRepoForked } from "react-icons/go";
import { motion } from "framer-motion";
/* import { GoStar } from "react-icons/go";
import { GoBook } from "react-icons/go"; */
/* import { GoRuby } from "react-icons/go"; */

const Card = ({ title, text, icon: Icon }) => {
  return (
    <article className={styles.card}>
      {Icon && <Icon size="2em" color="#1799a8" />}
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
};
export const Section2 = ({ translations }) => {
  const { advantages, title_3, title_4, title_5, text_3, text_5, text_4 } =
    translations;
  return (
    <section className={styles.container}>
      <div className={styles.bg_wrapper}></div>
      <div className={styles.cards_container}>
        <motion.div
          className={styles.card_animation}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.3, delay: 0.3 },
          }}
          viewport={{ once: true, amount: 0.6 }}
        >
          <article className={styles.card_title}>
            <h2>{advantages}</h2>
          </article>
        </motion.div>
        <motion.div
          className={styles.card_animation}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.3, delay: 0.5 },
          }}
          viewport={{ once: true, amount: 0.6 }}
        >
          <Card title={title_3} text={text_3} icon={GoFlame} />
        </motion.div>

        <motion.div
          className={styles.card_animation}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.3, delay: 0.7 },
          }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Card title={title_5} text={text_5} icon={GoRepoForked} />
        </motion.div>
        <motion.div
          className={styles.card_animation}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.3, delay: 0.9 },
          }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Card title={title_4} text={text_4} icon={GoSync} />
        </motion.div>
      </div>
    </section>
  );
};
