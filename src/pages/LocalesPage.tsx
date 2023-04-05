import { useLocales } from '../hooks/useLocales';
// import { useTranslation } from 'react-i18next';

function LocalesPage() {
  // const { t } = useTranslation('common');
  const t = useLocales('common');

  return (
    <div>
      <div>{t('test')}</div>
      <div>{t('placeholder.login')}</div>
      <div>{t('obj-test', ['6'])}</div>
      <div>{t('obj-test-email', ['aaa@aaa.com'])}</div>
    </div>
  );
}

export default LocalesPage;
