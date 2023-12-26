'use client';
import {Icon} from 'components/icons';
import {useTranslations} from 'next-intl';
import { useState } from 'react';
//import json file
const nomes = require('/public/api/names.json');



export default function IndexPage() {
    const all = nomes.m.concat(nomes.f);
    const m = nomes.m;
    const f = nomes.f;
    const l = nomes.l

    function randomName(type:string) {
        if (type == 'all') {
            return all[Math.floor(Math.random() * all.length)] + ' ' + l[Math.floor(Math.random() * l.length)]
        } else if (type == 'm') {
            return m[Math.floor(Math.random() * m.length)] + ' ' + l[Math.floor(Math.random() * l.length)]
        } else if (type == 'f') {
            return f[Math.floor(Math.random() * f.length)] + ' ' + l[Math.floor(Math.random() * l.length)]
        }}

    const [names, setNames] = useState<string[]>([]);
    const [selectedValue, setSelectedValue] = useState('all');
    const handleRadioChange = (event:any) => {
        setSelectedValue(event.target.value);
    };

    const handleGenerate = () => {
        const newNames:any = [];
        for (let i = 0; i < 5; i++) {
            newNames.push(randomName(selectedValue));
        }
        setNames(newNames);
    };

    const t = useTranslations('NamesPage');

    interface ExibirProps {
        nome: string;
    }
    
    const Exibir: React.FC<ExibirProps> = ({ nome }) => {
        const copyToClipboard = () => {
            navigator.clipboard.writeText(nome);
        };
        return (
            <>
                <div className="card m-1">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-9 col-lg-10 col-xl-10 d-flex d-md-flex justify-content-center align-items-center justify-content-md-center align-items-md-center">
                                <h4 className="text-primary d-flex flex-grow-1 justify-content-sm-center justify-content-lg-start mb-0">{nome}</h4>
                            </div>
                            <div className="col d-flex justify-content-center justify-content-sm-center align-items-sm-center justify-content-md-end">
                                <button onClick={copyToClipboard} className="btn btn-primary d-flex justify-content-center align-items-center justify-content-xxl-center align-items-xxl-center mt-1" type="button">
                                    <Icon name='copy' estilo='text-dark me-1'/>{t('copy')}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return (
            <>
    <section className="py-4 py-xl-5">
        <div className="container">
            <div className="row row-cols-md-2 d-flex flex-grow-1">
                <div className="col-auto col-sm-12 col-md-6 d-flex align-self-baseline order-first order-md-last"><img className="img-fluid d-flex" src="/assets/img/blobs/names_generate.webp" alt="Inanimalia Fortuna Mini Kraken gerador de nome de personagens" width="auto"/></div>
                <div className="col-md-6 col-xl-6 order-last mt-5">
                    <div className="text-white">
                        <h1 className="fw-bold text-white mb-3">{t('title')}</h1>
                        <p className="mb-4">{t('desc')}</p>
                        <div className="custom-control custom-radio"><input id="customRadio1" className="custom-control-input form-check-input" type="radio" name="config" value="all" onChange={handleRadioChange} checked={selectedValue === 'all'}/><label className="form-label custom-control-label ms-1" >{t('all')}</label></div>
                        <div className="custom-control custom-radio"><input id="customRadio2" className="custom-control-input form-check-input" type="radio" name="config" value="m" onChange={handleRadioChange} checked={selectedValue === 'm'}/><label className="form-label custom-control-label ms-1" >{t('male')}</label></div>
                        <div className="custom-control custom-radio"><input id="customRadio3" className="custom-control-input form-check-input" type="radio" name="config" value="f" onChange={handleRadioChange} checked={selectedValue === 'f'}/><label className="form-label custom-control-label ms-1" >{t('female')}</label></div>
                    </div>
                    <div><button id="gerar" className="btn btn-primary link-light mt-2 mb-2" type="button" onClick={handleGenerate}>Gerar Nomes</button></div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row g-0 d-xl-flex justify-content-xl-center align-items-xl-center">
                <div id="resultados" className="col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
                {names.map((name, index) => <Exibir key={index} nome={name} />)}
                </div>
            </div>
        </div>
    </section>
            </>
        )
    }