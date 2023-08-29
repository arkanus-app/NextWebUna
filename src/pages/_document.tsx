import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';
import NavPT from '@/components/nav-PT';

export default function App() {
  return (
    <Html data-bs-theme="dark" lang="en">
      <Head>
        <link rel="apple-touch-icon" type="image/png" sizes="180x180" href="img/geral/marca/icon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/img/geral/marca/icon/favicon-16x16.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/img/geral/marca/icon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="180x180" href="/img/geral/marca/icon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="192x192" href="/img/geral/marca/icon/android-chrome-192x192.png"/>
        <link rel="icon" type="image/png" sizes="512x512" href="/img/geral/marca/icon/android-chrome-512x512.png"></link>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <NavPT />
        <Main />
        <NextScript />
      </body>
    </Html> 
  );
}

