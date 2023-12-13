export default function BlogPost( {params} : {params: {id: string}} ) {
    return (
        <>
        <div className="col m-md-3 ">
        <div className="container blogPost  border rounded border-0 p-0 " >
            <div className="p-5 mb-3 img-fluid rounded-top" style={{background: "url('/assets/img/background/dnd.webp') center / cover"}}><span className="badge bg-primary text-light m-1">Categoria 1</span><span className="badge bg-primary text-light m-1">Categoria 2</span><span className="badge bg-primary text-light m-1">Categoria 3</span><span className="badge bg-primary text-light m-1">Categoria 4</span>
                <h1 className="text-light pb-5 pt-2">Insira um titulo aqui para a noticia que deseja adicionar</h1>
            </div>
            <div className="px-3 pb-3">
                <h4 className="text-light mt-3 mb-0">Estilo de Paragrafo 1</h4>
                <div>
                    <article className="p-1">
                        <p className="text-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br />Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </article>
                </div>
                <div className="row mb-2">
                    <div className="col-md-12 col-lg-12 col-xl-8">
                        <div>
                            <h4 className="text-light">Dividido com Foto</h4>
                            <p className="text-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br />Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with </p>
                        </div>
                    </div>
                    <div className="col text-center mb-3"><img className="img-fluid" src="geral/sistemas/dnd_logo.svg" alt="Bot no discord para jogar Carbon2185" width="300" loading="lazy" /></div>
                </div>
                <div className="row mb-2">
                    <div className="col-md-12 col-lg-12 col-xl-8 col-xxl-6">
                        <div>
                            <h4 className="text-light">Dividido em 2 com texto</h4>
                            <p className="text-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br />Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with </p>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-12 col-xl-8 col-xxl-6">
                        <div>
                            <h4 className="text-light">Dividido em 2 com texto</h4>
                            <p className="text-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br />Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with </p>
                        </div>
                    </div>
                </div>
                <div className="col-auto col-xl-12 text-center d-xxl-flex justify-content-xxl-center"><iframe className="blogVideo border rounded border-1 border-primary d-xxl-flex align-items-xxl-center" allowFullScreen src="https://www.youtube.com/embed/TYo0tUIkBDc" ></iframe></div>
                <div className="col d-xxl-flex justify-content-xxl-center p-3"><img className="rounded img-fluid" src="geral/background/ordem.webp" /></div>
            </div>
        </div>
        </div>
        </>
    )

  }