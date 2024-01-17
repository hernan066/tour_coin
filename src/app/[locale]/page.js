import { Navbar } from "@/components/navbar/Navbar";
import styles from "./page.module.css";
import { Banner } from "@/components/banner/Banner";
import { Section1 } from "@/components/section1/Section1";
import { Section2 } from "@/components/section2/Section2";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("navbar");
  return (
    <main className={styles.main}>
      <Navbar
        Home={t("Home")}
        TourCoin={t("TourCoin")}
        About={t("About")}
        Contact={t("Contact")}
        Language={t("Language")}
        Spanish={t("Spanish")}
        English={t("English")}
        Portuguese={t("Portuguese")}
      />
      <Banner />
      <Section1 />
      <Section2 />
    </main>
  );
}
