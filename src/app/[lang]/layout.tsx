import NavPT from '@/src/components/nav-PT';
import '@/public/css/animate.min.css' //Esse
import '@/public/css/bs-theme-overrides.css'; //Esste aqui ohhhhh
import '@/public/css/styles.css'; //Esse

export const metadata = {
  title: 'Una',
  description: 'Gerado por Una',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html data-bs-theme="dark" lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
          crossOrigin="anonymous"
        />
        <link rel="apple-touch-icon" type="image/png" sizes="180x180" href="img/geral/marca/icon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/img/geral/marca/icon/favicon-16x16.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/img/geral/marca/icon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="180x180" href="/img/geral/marca/icon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="192x192" href="/img/geral/marca/icon/android-chrome-192x192.png"/>
        <link rel="icon" type="image/png" sizes="512x512" href="/img/geral/marca/icon/android-chrome-512x512.png"></link>
      </head>
      <body>
        <NavPT />
        {children}
        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
            crossOrigin="anonymous"
        />
        <script 
            src="https://code.jquery.com/jquery-3.7.0.min.js" 
            integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" 
            crossOrigin="anonymous"
        />
        <script 
            src="/js/bs-init.js"
        />
      </body>
    </html> 
  );
}

