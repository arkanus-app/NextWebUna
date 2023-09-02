import Script from 'next/script';
import Image from 'next/image';
import Una from "@/public/img/geral/blobs/names_generate.webp";
export default function Page() {
    return <>
   <section className="py-4 py-xl-5">
  <div className="container">
    <div className="overflow-hidden">
      <div className="row">
        <div
          className="col-md-6 order-first order-md-last"
          data-bss-hover-animate="pulse"
        >
          <Image
            className="img-fluid w-100 h-100 fit-cover"
            src={Una}
            alt="Inanimalia Fortuna Mini Kraken gerador de nome de personagens"
          />
        </div>
        <div className="col-md-6 order-last">
          <div className="text-white p-4 p-md-5">
            <h1 className="fw-bold text-white mb-3">Gerador de Nomes</h1>
            <p className="mb-4">
              Este gerador de nomes de personagens foi criado para ser um ponto
              de partida para você, auxiliando sua escrita de Livro, Campanha de
              rpg ou jogo, Se você está procurando nomes para seus personagens,
              está no lugar certo.
            </p>
            <div className="custom-control custom-radio">
              <input
                type="radio"
                id="customRadio1"
                className="custom-control-input form-check-input"
                name="config"
                defaultChecked
              />
              <label
                className="form-label custom-control-label ms-1"
                htmlFor="customRadio1"
                
              >
                Todos
              </label>
            </div>
            <div className="custom-control custom-radio">
              <input
                type="radio"
                id="customRadio2"
                className="custom-control-input form-check-input"
                name="config"
                
              />
              <label
                className="form-label custom-control-label ms-1"
                htmlFor="customRadio2"
              >
                Masculino
              </label>
            </div>
            <div className="custom-control custom-radio">
              <input
                type="radio"
                id="customRadio3"
                className="custom-control-input form-check-input"
                name="config"
                
              />
              <label
                className="form-label custom-control-label ms-1"
                htmlFor="customRadio3"
              >
                Feminino
              </label>
            </div>
          </div>
          <div className="d-xl-flex justify-content-xl-center">
            <button
              className="btn btn-primary link-light"
              data-bss-hover-animate="pulse"
              id="gerar"
              type="button"
            >
              Gerar Nomes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="overflow-hidden">
      <div className="row g-0 d-xl-flex justify-content-xl-center align-items-xl-center">
        <div className="col-md-6 col-xl-12 text-center">
          <span
            className="spinner-border text-primary d-none"
            role="status"
            id="fake_load"
          />
          <p className="text-primary d-none" id="result">
            &nbsp;
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<Script 
    src="/js/geradores/gerar_nome.js"
/>
</>
}