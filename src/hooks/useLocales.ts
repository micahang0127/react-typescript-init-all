import { useTranslation } from 'react-i18next';

function useLocales(type: string) {
  const { t } = useTranslation(type);

  return function $(key: string, data: string[] = []) {
    return t(key, { ...data });
  };
}

export { useLocales };
