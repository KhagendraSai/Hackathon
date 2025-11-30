import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
    { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' }
  ];

  return (
    <div className="language-switcher">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => i18n.changeLanguage(lang.code)}
          className={i18n.language === lang.code ? 'active' : ''}
        >
          {lang.flag} {lang.name}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
