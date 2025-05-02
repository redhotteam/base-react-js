import { useTranslation } from "react-i18next";
import { Link } from "react-router";

function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-4">{t("notFound")}</p>
        <Link to="/" className="text-blue-500 hover:underline">
          {t("goHome")}
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
