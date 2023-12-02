import {ReactNode} from 'react';
type Props = {
  children?: ReactNode;
  title: ReactNode;
};

export default function PageLayout({children}: Props) {

  return (
    <>
    {children}
    </>
  );
}

//adicione o head 



