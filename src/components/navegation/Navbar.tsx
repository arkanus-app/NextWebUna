'use client';

import {useTranslations} from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';
import NavItem from './components/NavItem'; // Updated import statement
import DropdownMenu from './components/Drop';
export default function Navigation() {
    const t = useTranslations('Navigation');

  return (

    <nav className="navbar navbar-expand-xl sticky-top bg-dark">
    <div className="container-fluid"><a className="navbar-brand d-flex align-items-center" href="/"><img className="img-fluid pe-1" src="/assets/img/geral/marca/logo_red.svg" alt="Mini Kraken Bot" width="35px" height="35px" /><span className="mt-1 mb-0 m-1">Mini Kraken</span></a><button className="navbar-toggler border-0" data-bs-toggle="collapse" data-bs-target="#navcol"><span className="visually-hidden"></span><span className="navbar-toggler-icon"></span></button>
        <div id="navcol" className="collapse navbar-collapse justify-content-between">
            <ul className="navbar-nav ms-auto d-flex r">
            <NavItem text={t('premium')} link='/#premium' svgLink='rocket'></NavItem>
            <DropdownMenu title='Materiais' svgLink='art' items={[{ title: 'Titulo Legal muahahahaa', desc: 'test', link: '/tools/names.html', svgLink: 'discord' },{ title: 'Titulo Legal muahahahaa', desc: 'test', link: '/tools/names.html', svgLink: 'magic' },{ title: 'Titulo Legal muahahahaa', desc: 'test', link: '/tools/names.html', svgLink: 'shild' }]}></DropdownMenu>
            <DropdownMenu title={t('tools.title')} svgLink='tesoura' items={[{ title: 'test', desc: 'test', link: '/tools/names.html', svgLink: 'discord' }]}></DropdownMenu>
            <DropdownMenu title={t('docs')} svgLink='book' items={[{ title: 'test', desc: 'test', link: '/tools/names.html', svgLink: 'discord' }]}></DropdownMenu>
            <NavItem text='Discord' link='https://ata' svgLink='discord'></NavItem>

            </ul>
            <ul className="navbar-nav ms-auto">
                <LocaleSwitcher></LocaleSwitcher>
                <li className="nav-item"><a className="btn btn-primary link-light border-0" role="button" href="https://discord.com/api/oauth2/authorize?client_id=899421595125288961&amp;permissions=8&amp;scope=bot%20applications.commands" target="_blank" rel="external">{t('invite')}</a></li>
            </ul>
        </div>
    </div>
</nav>



  );
}
