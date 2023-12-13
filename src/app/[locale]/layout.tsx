import clsx from 'clsx';
import {Inter} from 'next/font/google';
import {notFound} from 'next/navigation';
import {createTranslator, NextIntlClientProvider} from 'next-intl';
import {ReactNode} from 'react';
import Navigation from 'components/navegation/Navbar';
import Script from 'next/script';
import Footer from 'components/navegation/Footer';
const inter = Inter({subsets: ['latin']});
type Props = {
  children: ReactNode;
  params: {locale: string};
};

async function getMessages(locale: string) {
  try {
    return (await import(`../../../i18n/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export async function generateStaticParams() {
  return ['en', 'pt', 'es'].map((locale) => ({locale}));
}

export async function generateMetadata({params: {locale}}: Props) {
  const messages = await getMessages(locale);

  // You can use the core (non-React) APIs when you have to use next-intl
  // outside of components. Potentially this will be simplified in the future
  // (see https://next-intl-docs.vercel.app/docs/next-13/server-components).
  const t = createTranslator({locale, messages});

  return {
    title: t('LocaleLayout.title')

  };
}

export default async function LocaleLayout({
  children,
  params: {locale}
}: Props) {
  const messages = await getMessages(locale);

  return (
    <html data-bs-theme='dark' lang={locale}>
      <body className={clsx(inter.className, '')}>
      <script src='/assets/js/jquery.min.js'  ></script>
      <script src="/assets/js/bs-init.js" ></script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>

        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navigation />
          {children}
          <Footer />
        </NextIntlClientProvider>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossOrigin="anonymous"></Script>

       </body>
    </html>
  );
}
