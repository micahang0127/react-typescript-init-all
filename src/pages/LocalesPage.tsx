import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

function LocalesPage() {
  const { t, i18n } = useTranslation('common');

  const toggleLocales = useCallback(
    (locale: string) => {
      i18n.changeLanguage(locale);
    },
    [i18n]
  );

  return (
    <div>
      <div>{t('test')}</div>
      <div>
        <button
          type="button"
          onClick={() => toggleLocales('en-US')}
          title="영어로 바꾸기"
        >
          en
        </button>
        <button
          type="button"
          onClick={() => toggleLocales('ko-KR')}
          title="한글로 바꾸기"
        >
          ko
        </button>
      </div>
    </div>
  );
}

export default LocalesPage;
