import { AppProps } from 'next/app'
import Script from 'next/script'
import '@/assets/css/animate.min.css'
import '@/assets/css/bs-theme-overrides.css';
import '@/assets/css/styles.css';

export default function MyApp({ Component, pageProps }: AppProps) {
    return <>
        <Component {...pageProps} />
        <Script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
            crossOrigin="anonymous"
        />
        <Script 
            src="https://code.jquery.com/jquery-3.7.0.min.js" 
            integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" 
            crossOrigin="anonymous"
        />
        <Script 
            src="/js/bs-init.js"
            strategy='beforeInteractive'
        />
    </>
}