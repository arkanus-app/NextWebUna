'use client';
import {useTranslations} from 'next-intl';
import {usePathname, useRouter} from 'next-intl/client';
import {useTransition} from 'react';
import Link from 'next/link'
import {Icon} from 'components/icons';
export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const [isPending, startTransition] = useTransition();

  const pathname = usePathname();
  var newPath = pathname.replace("/en", "");
  newPath = newPath.replace("/pt", "");
  newPath = newPath.replace("/es", "");
  return (
    <label>
      <li className={"nav-item dropdown"}><a className={"dropdown-toggle nav-link me-1 d-flex align-items-center"} aria-expanded="false" data-bs-toggle="dropdown" href="#">{t('lang')}<Icon name="world" estilo='ms-2'/></a>
    <div className={"dropdown-menu dropdown-menu-end"}>
      <Link className={"dropdown-item"} locale="en" href={'/en'+pathname} rel="alternate"><img className={"img-fluid m-1"} src="/assets/img/flags/en.svg" width="25px" />{t('en')}</Link>
      <Link className={"dropdown-item"} locale="pt" href={'/pt'+pathname} rel="alternate"><img className={"img-fluid m-1"} src="/assets/img/flags/br.svg" width="25px" />{t('pt')}</Link>
      <Link className={"dropdown-item"} locale="pt" href={'/es'+pathname} rel="alternate"><img className={"img-fluid m-1"} src="/assets/img/flags/es.svg" width="25px" />{t('es')}</Link>

      </div>
</li>
    </label>
  );
}
