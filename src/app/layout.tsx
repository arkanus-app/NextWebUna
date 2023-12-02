import {ReactNode} from 'react';
//import './styles.css';
//improte o bootstrap
import '../../public/assets/animate.min.css'
import '../../public/assets/bootstrap/css/bootstrap.min.css'
import '../../public/assets/bootstrap/bs-theme-overrides.css'
import '../../public/assets/styles.css'


//faça que animationsCss seja carregado na pagina





type Props = {
  children: ReactNode;
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({children}: Props) {
  return children;
}

