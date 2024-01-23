import { useTranslations } from "next-intl";
import { Section3 } from "./Section3";

export const Section3_index = () => {
  const t = useTranslations("section_3");

  const title = t("title");
  const text = t("text");

  const translations = {
    title,
    text,
  };

  return <Section3 translations={translations} />;
};
