'use client';
import { useState } from 'react';

export default function IndexPage() {
    const [cardNumber, setCardNumber] = useState(0);

    const handleGenerate = () => {
        const newCardNumber = Math.floor(Math.random() * 21) + 1;
        setCardNumber(newCardNumber);
    };

    return (
        <>
            <section className="justify-content-lg-center pt-2">
                <div className="container p-5">
                    <div className="row g-0 d-flex d-md-flex justify-content-center justify-content-md-center">
                        <div className="col-10 col-md-5 order-first order-md-last">
                            <img id="cardshow" className="rounded img-fluid w-100 h-100 fit-cover shadow_1" src={`/api/tarot/${cardNumber}.webp`}  alt="Carta de Tarot aleatoria" />
                        </div>
                        <div className="col-12 col-md-7 d-flex justify-content-center align-items-center align-content-center order-last p-4">
                            <div className="text-white">
                                <h1 className="fw-bold text-white">Gerador de Cartas Tarot</h1>
                                <p>Um Gerador de cartas de Tarot aleatórias, que pode de alguma de alguma forma ajudar a fazer alguma campanha ou jogo. </p>
                                <div className="d-lg-flex d-xl-flex justify-content-lg-start align-items-lg-center justify-content-xl-start align-items-xl-center">
                                    <button id="cardsrun" className="btn btn-primary btn-lg link-light m-2 ms-0" type="button" onClick={handleGenerate}>Gerar Carta</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}