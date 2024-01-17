"use client";
import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";
import { GoChevronRight } from "react-icons/go";
import { useState } from "react";

export const Navbar = ({
  Home,
  TourCoin,
  About,
  Contact,
  Language,
  Spanish,
  English,
  Portuguese,
}) => {
  const [menu, setMenu] = useState(false);
  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.center}>
          <Link href={"/"}>
            <Image
              className={styles.logo}
              src="/logo_2.png"
              alt="Logo"
              width={50}
              height={50}
              priority
            />
          </Link>
        </div>
        <div>
          <ul className={styles.links}>
            <li>{Home}</li>
            <li>{TourCoin}</li>
            <li>{About}</li>
            <li>{Contact}</li>
            <li
              style={{ display: "flex", alignItems: "center" }}
              onClick={() => setMenu(!menu)}
            >
              {Language}
              <GoChevronRight />
            </li>
          </ul>
        </div>
      </nav>
      <div className={menu ? styles.menu_active : styles.menu}>
        <ul>
          <li>
            <Link href={"es"} onClick={() => setMenu(!menu)}>
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
