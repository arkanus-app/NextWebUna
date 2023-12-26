'use client';
import {Icon} from 'components/icons';
import {useTranslations} from 'next-intl';
export default function Footer() {
    const t = useTranslations('Navigation');
    return (
        <footer>
    <div className="container py-4 py-lg-5">
        <div className="row justify-content-center">
            <div className="col-sm-4 col-md-3 text-center text-lg-start d-flex flex-column item">
                <h3 className="fs-6">Utilitário </h3>
                <ul className="list-unstyled">
                    <li><a href="#">Página Inicial</a></li>
                    <li><a href="#">Mapa do Site</a></li>
                    <li></li>
                </ul>
            </div>
            <div className="col-sm-4 col-md-3 text-center text-lg-start d-flex flex-column item">
                <h3 className="fs-6">Sobre</h3>
                <ul className="list-unstyled">
                    <li><a href="https://arkanus.app/team">Equipe</a></li>
                    <li><a href="#">Objetivo</a></li>
                    <li></li>
                </ul>
            </div>
            <div className="col-sm-4 col-md-3 text-center text-lg-start d-flex flex-column item">
                <h3 className="fs-6">Legal</h3>
                <ul className="list-unstyled">
                    <li><a href="#">Termos de Uso</a></li>
                    <li><a href="#">Politica de Privacidade</a></li>
                    <li></li>
                </ul>
            </div>
            <div className="col-lg-3 text-center text-lg-start d-flex flex-column align-items-center order-first align-items-lg-start order-lg-last item social">
                <div className="fw-bold d-flex align-items-center"><img width="30" height="30" src="/assets/img/icons/arkanus.svg" /><span className="ms-2">Powered by Arkanus</span></div>
                <p className="text-muted copyright">Transformando seus sonhos em realidade com um pequeno toque de magica!</p>
            </div>
        </div>
        <hr className="text-primary" />
        <div className="d-flex justify-content-between align-items-center pt-3">
            <p className="text-muted mb-0">Copyright © 2023 Arkanus</p>
            <ul className="list-inline mb-0">
                <li className="list-inline-item"><a href="https://discord.gg/Nm3CypkQaq"><Icon name='discord' estilo='text-primary'/></a></li>
                <li className="list-inline-item"><a href="https://tiktok.com/@minikrakenbot"><Icon name='tik-tok' estilo='text-primary'/></a></li>
                <li className="list-inline-item"><a href="https://www.instagram.com/arkanus.app/"><Icon name='instagram' estilo='text-primary'/></a></li>
            </ul>
        </div>
    </div>
</footer>
    );
}