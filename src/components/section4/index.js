import { useTranslations } from "next-intl";
import { Section4 } from "./Section4";

export const Section4_index = () => {
  const t = useTranslations("section_4");

  const title = t("title");
  const active_1 = t("active_1");
  const active_2 = t("active_2");
  const active_3 = t("active_3");

  const translations = {
    title,
    active_1,
    active_2,
    active_3,
  };

  return <Section4 translations={translations} />;
};
