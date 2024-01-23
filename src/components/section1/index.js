import { useTranslations } from "next-intl";
import { Section1 } from "./Section1";

export const Section1_index = () => {
  const t = useTranslations("section_1");

  const title1 = t("title_1");
  const title2 = t("title_2");
  const text_1_1 = t("text_1_1");
  const text_1_2 = t("text_1_2");
  const text_2_1 = t("text_2_1");
  const text_2_2 = t("text_2_2");
  const button = t("button");

  const translations = {
    title1,
    title2,
    text_1_1,
    text_1_2,
    text_2_1,
    text_2_2,
    button,
  };

  return <Section1 translations={translations} />;
};
