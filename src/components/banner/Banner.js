import { useTranslations } from "next-intl";
import styles from "./banner.module.css";

export const Banner = () => {
  const t = useTranslations("banner");
  return (
    <section className={styles.banner_section} id="home">
      <div className={styles.banner_bg}>
        <video
          className={styles.video_bg}
          autoPlay
          /* controls */
          loop
          muted
          preload
        >
          <source
            type="video/mp4"
            src="https://player.vimeo.com/external/182638846.hd.mp4?s=32bdf2fd96d97eda7e57476efdadb1a6cc536cd2&amp;profile_id=119"
          />
        </video>
      </div>
      <div></div>

      <div className={styles.banner_title}>
        <h1>Tour Coin</h1>
        <h6>{t("title")}</h6>
      </div>

      <span className={styles.txt}>Scroll Down</span>
    </section>
  );
};
