'use client';

import {useTranslations} from 'next-intl';
import PageLayout from 'components/PageLayout';

// Note that `app/[locale]/[...rest]/page.tsx`
// is necessary for this page to render.

export default function NotFoundPage() {
  const t = useTranslations('NotFoundPage');

  return (
    <>
      <section>
    <div className="container mt-5 pt-5 mb-5 pb-5">
        <h1 className="display-1 fw-bold text-center text-primary pt-5">404</h1>
        <p className="text-center fs-4">{t('title')}</p>
    </div>
</section>
    </>
  );
}
