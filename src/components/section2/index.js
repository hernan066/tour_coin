import { useTranslations } from "next-intl";
import { Section2 } from "./Section2";

export const Section2_index = () => {
  const t = useTranslations("section_2");

  const advantages = t("advantages");

  const title_3 = t("card_3.title");
  const title_5 = t("card_5.title");
  const title_4 = t("card_4.title");

  const text_3 = t("card_3.text");
  const text_5 = t("card_5.text");
  const text_4 = t("card_4.text");

  const translations = {
    advantages,
    title_3,
    title_4,
    title_5,
    text_3,
    text_5,
    text_4,
  };

  return <Section2 translations={translations} />;
};
