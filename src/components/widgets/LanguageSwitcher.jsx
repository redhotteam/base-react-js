import { useNavigate, useParams } from 'react-router';
import i18n from 'i18next';
import Button from '../common/Buttons/Buttons';

const LanguageSwitcher = ({ className }) => {
  const navigate = useNavigate();
  const { lng } = useParams();

  const changeLanguage = newLng => {
    if (lng !== newLng) {
      i18n.changeLanguage(newLng);
      navigate(`/${newLng}`);
    }
  };

  return (
    <div className={`flex gap-3 ${className}`}>
      <Button onClick={() => changeLanguage('en')}>English</Button>
      <Button onClick={() => changeLanguage('uk')}>Ukrainian</Button>
    </div>
  );
};

export default LanguageSwitcher;
