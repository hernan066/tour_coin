"use client";
import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
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

const Menu = ({ translate, setMobile }) => {
  const {
    Home,
    TourCoin,
    About,
    Actives,
    Language,
    Spanish,
    English,
    Portuguese,
    back,
  } = translate;
  const [menu, setMenu] = useState(false);
  return (
    <div className={styles.menu_mobile}>
      <div className={styles.btn_close} onClick={() => setMobile(false)}>
        <IoMdClose size={"3rem"} />
      </div>
      <div
        className={
          !menu
            ? styles.menu_mobile_container
            : styles.menu_mobile_container_active
        }
      >
        <ul className={styles.menu_mobile_links}>
          <li>
            <Link href="/#home" onClick={() => setMobile(false)}>
              {Home}
            </Link>
          </li>
          <li>
            <Link href="/#tour_coin" onClick={() => setMobile(false)}>
              {TourCoin}
            </Link>
          </li>
          <li>
            <Link href="/#actives" onClick={() => setMobile(false)}>
              {Actives}
            </Link>
          </li>
          <li>
            <Link href="/#about" onClick={() => setMobile(false)}>
              {About}
            </Link>
          </li>

          <li
            onClick={() => setMenu(true)}
            style={{
              display: "flex",
              alignItems: "center",
              color: "#1781a8",
              position: "relative",
              right: "-30px",
            }}
          >
            {Language}
            <GoChevronRight style={{ top: "10px", position: "relative" }} />
          </li>
        </ul>
        <ul className={styles.menu_mobile_links}>
          <li>
            <Link href={"es"} onClick={() => setMobile(false)}>
              {Spanish}
            </Link>
          </li>
          <li>
            <Link href={"en"} onClick={() => setMobile(false)}>
              {English}
            </Link>
          </li>
          <li>
            <Link href={"pt"} onClick={() => setMobile(false)}>
              {Portuguese}
            </Link>
          </li>
          <li
            onClick={() => setMenu(false)}
            style={{
              display: "flex",
              alignItems: "center",
              color: "#1781a8",
              position: "relative",
              left: "-30px",
            }}
          >
            <GoChevronLeft style={{ top: "10px", position: "relative" }} />
            {back}
          </li>
        </ul>
      </div>
    </div>
  );
};

export const Navbar = ({
  Home,
  TourCoin,
  About,
  Actives,
  Language,
  Spanish,
  English,
  Portuguese,
  back,
}) => {
  const [menu, setMenu] = useState(false);
  const [mobile, setMobile] = useState(false);

  const translate = {
    Home,
    TourCoin,
    About,
    Actives,
    Language,
    Spanish,
    English,
    Portuguese,
    back,
  };
  return (
    <header>
      {mobile && <Menu translate={translate} setMobile={setMobile} />}

      <nav className={styles.navbar}>
        <div className={styles.center}>
          <Link href={"/"}>
            <Image
              className={styles.logo}
              src="/logo_8.png"
              alt="Logo"
              width={50}
              height={50}
              priority
            />
          </Link>
        </div>
        <div>
          <ul className={styles.links}>
            <li>
              <Link href="/#home" onClick={() => setMobile(false)}>
                {Home}
              </Link>
            </li>
            <li>
              <Link href="/#tour_coin" onClick={() => setMobile(false)}>
                {TourCoin}
              </Link>
            </li>
            <li>
              <Link href="/#actives" onClick={() => setMobile(false)}>
                {Actives}
              </Link>
            </li>
            <li>
              <Link href="/#about" onClick={() => setMobile(false)}>
                {About}
              </Link>
            </li>

            <li
              style={{ display: "flex", alignItems: "center" }}
              onClick={() => setMenu(!menu)}
            >
              {Language}
              <GoChevronRight />
            </li>
          </ul>
        </div>
        <div className={styles.links_mobile} onClick={() => setMobile(true)}>
          <IoMenu size={"3rem"} />
        </div>
      </nav>
      <div className={menu ? styles.menu_active : styles.menu}>
        <ul>
          <li>
            <Link
              href={"es"}
              onClick={() => {
                setMenu(!menu);
              }}
            >
              {Spanish}
            </Link>
          </li>
          <li>
            <Link href={"en"} onClick={() => setMenu(!menu)}>
              {English}
            </Link>
          </li>
          <li>
            <Link href={"pt"} onClick={() => setMenu(!menu)}>
              {Portuguese}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
