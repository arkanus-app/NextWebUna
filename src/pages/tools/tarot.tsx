import Script from 'next/script';
export default function Page() {
    return <>
    <section className="d-lg-flex justify-content-lg-center">
  <div className="container">
    <div className="row g-0">
      <div className="col-md-6 order-first order-md-last p-5 rounded">
        <img
          className="rounded img-fluid w-100 h-100 fit-cover "
          id="cardshow"
          src="https://apis.arkanus.app/tarot-card/13.webp"
          alt="Carta de Tarot aleatoria"
        />
      </div>
      <div className="col d-flex justify-content-center align-items-center align-content-center order-last">
        <div className="text-white">
          <h1 className="fw-bold text-white">Gerador de Cartas Tarot</h1>
          <p>
            Um Gerador de cartas de Tarot aleatórias, que pode de alguma de
            alguma forma ajudar a fazer alguma campanha ou jogo.{" "}
          </p>
          <div className="d-lg-flex d-xl-flex justify-content-lg-start align-items-lg-center justify-content-xl-start align-items-xl-center">
            <button
              className="btn btn-primary btn-lg link-light m-2 ms-0"
              id="cardsrun"
              type="button"
            >
              Gerar Carta
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<Script 
    src="/js/geradores/tarot.js"
/>
</>
}