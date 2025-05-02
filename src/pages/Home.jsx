import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/widgets/LanguageSwitcher';

function Home() {
  const { t } = useTranslation();
  // const unusedVar = 47;
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <LanguageSwitcher />
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">{t('welcome')}</h1>
        <p className="text-lg">{t('description')}</p>
      </div>
    </div>
  );
}

export default Home;
