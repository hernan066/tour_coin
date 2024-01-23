import { Banner } from "./Banner";
import { useTranslations } from "next-intl";

export const Banner_index = () => {
  const t = useTranslations("banner");

  return <Banner title={t("title")} button={t("button")} />;
};
