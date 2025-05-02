import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/widgets/LanguageSwitcher";

function Home() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <LanguageSwitcher />
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{t("welcome")}</h1>
        <p className="text-lg">{t("description")}</p>
      </div>
    </div>
  );
}

export default Home;
