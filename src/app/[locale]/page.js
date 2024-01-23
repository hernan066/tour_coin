import { Navbar } from "@/components/navbar/Navbar";
import styles from "./page.module.css";

import { useTranslations } from "next-intl";

import { Banner_index } from "@/components/banner";
import { Section1_index } from "@/components/section1";
import { Section2_index } from "@/components/section2";
import { Section4_index } from "@/components/section4";
import { Section3_index } from "@/components/section3";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  const t = useTranslations("navbar");

  return (
    <main className={styles.main}>
      <Navbar
        Home={t("Home")}
        TourCoin={t("TourCoin")}
        About={t("About")}
        Actives={t("Actives")}
        Language={t("Language")}
        Spanish={t("Spanish")}
        English={t("English")}
        Portuguese={t("Portuguese")}
        back={t("back")}
      />
      <Banner_index />
      <Section1_index />
      <Section2_index />
      <Section4_index />
      <Section3_index />
      <Footer />
    </main>
  );
}
