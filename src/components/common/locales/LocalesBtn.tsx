import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

function LocalesBtn() {
  const { i18n } = useTranslation();

  const toggleLocales = useCallback(
    (locale: string) => {
      i18n.changeLanguage(locale);
    },
    [i18n]
  );

  return (
    <div>
      <button type="button" onClick={() => toggleLocales('ko-KR')} title="Ko">
        Ko
      </button>
      <button type="button" onClick={() => toggleLocales('en-US')} title="En">
        En
      </button>
    </div>
  );
}

export default LocalesBtn;
