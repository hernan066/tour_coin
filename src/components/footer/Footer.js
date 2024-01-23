import { useTranslations } from "next-intl";
import styles from "./footer.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export const Footer = () => {
  const t = useTranslations("footer");
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.footerCol}>
            <h4>{t("title_1")}</h4>
            <ul>
              <li>
                <a href="/">{t("link_1")}</a>
              </li>
              <li>
                <a href="/">{t("link_2")}</a>
              </li>
              <li>
                <a href="/">{t("link_3")}</a>
              </li>
              <li>
                <a href="/">{t("link_4")}</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>{t("title_2")}</h4>
            <ul>
              <li>
                <a href="/">Email</a>
              </li>

              <li>
                <a href="/">WhatsApp</a>
              </li>
              <li>
                <a href="/">Telegram</a>
              </li>
              <li>
                <a href="/">+54 11 256897458</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>{t("title_3")}</h4>
            <ul>
              <li>
                <a href="/">binance 1</a>
              </li>
              <li>
                <a href="/">binance 2</a>
              </li>
              <li>
                <a href="/">binance 3</a>
              </li>
              <li>
                <a href="/">binance 4</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>{t("title_4")}</h4>
            <div className={styles.socialLinks}>
              <a href="www.google.com">
                <FaFacebookF size="1.4em" />
              </a>
              <a href="www.google.com">
                <FaInstagram size="1.4em" />
              </a>
              <a href="www.google.com">
                <FaTiktok size="1.4em" />
              </a>
              <a href="www.google.com">
                <FaXTwitter size="1.4em" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
