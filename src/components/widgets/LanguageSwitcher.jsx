import { useNavigate, useParams } from "react-router";
import i18n from "i18next";

const LanguageSwitcher = () => {
  const navigate = useNavigate();
  const { lng } = useParams();

  const changeLanguage = (newLng) => {
    if (lng !== newLng) {
      i18n.changeLanguage(newLng);
      navigate(`/${newLng}`);
    }
  };

  return (
    <div className="flex gap-3">
      <button className="cursor-pointer" onClick={() => changeLanguage("en")}>
        English
      </button>
      <button className="cursor-pointer" onClick={() => changeLanguage("uk")}>
        Українська
      </button>
    </div>
  );
};

export default LanguageSwitcher;
