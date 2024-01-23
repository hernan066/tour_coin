"use client";
import { useContext } from "react";
import Image from "next/image";

import UiContext from "../../store/UiContext";
import { motion } from "framer-motion";

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0 } },
};
const menuAnimate = {
  initial: { opacity: 0, x: -150 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

export const Menu = () => {
  const { actionCloseMenu } = useContext(UiContext);

  const handleClick = () => {
    actionCloseMenu();
  };

  return (
    <>
      <motion.div
        className="overlay__black"
        initial={{ height: 0 }}
        animate={{ height: "100vh", transition: { duration: 0.5 } }}
        exit={{ y: "-100vh", transition: { duration: 0.5 } }}
      ></motion.div>
      <motion.header
        className="header__container__black"
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <nav className="navbar__container">
          <div className="navbar__logo__img">
            <Image
              src="/logos/logoP_white.png"
              alt="Landscape picture"
              width={179}
              height={50}
            />
          </div>
          <div className="navbar__menu__black">
            <span>MENU</span>
            <motion.button
              onClick={() => actionCloseMenu()}
              whileHover={{ rotate: 180 }}
            >
              <i className="fa-solid fa-x"></i>
            </motion.button>
          </div>
        </nav>

        <motion.nav
          className="menu__overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.5 } }}
          exit={{ opacity: 0 }}
        >
          <h3>MENU</h3>

          <motion.ul
            initial={"initial"}
            animate={"animate"}
            transition={{ staggerChildren: 0.2, delayChildren: 0.5 }}
          >
            <motion.li
              variants={menuAnimate}
              whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
              onClick={() => handleClick("/")}
            >
              <a>Home</a>
            </motion.li>
            <motion.li
              variants={menuAnimate}
              whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
              onClick={() => handleClick("/projects")}
            >
              <a>Projects</a>
            </motion.li>
            <motion.li
              variants={menuAnimate}
              whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
              onClick={() => handleClick("/about")}
            >
              <a>About me</a>
            </motion.li>
            <motion.li
              variants={menuAnimate}
              whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
              onClick={() => handleClick("/contact")}
            >
              <a>Contact</a>
            </motion.li>
          </motion.ul>
        </motion.nav>
        <motion.footer
          className="menu__footer"
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.5 },
          }}
          exit={{ opacity: 0 }}
        >
          <small className="small copyright-text">
            © 2022 Hernan Moneta. Made with ❤️ in Rosario, Argentina.
          </small>
        </motion.footer>
      </motion.header>
    </>
  );
};
