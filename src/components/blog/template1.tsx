interface blog_template1 {
    titulo: string,
    desc: string,
    btn_text: string,
    btn_link: string,
    pic: string,
    alt: string
}

const blog_template = ({ titulo, desc, btn_text, btn_link, pic, alt }: blog_template1) => {
    return (
        <div className="col d-flex mt-1 mb-3 p-1">
    <div className="card border-white border-0 shadow glass-container cardBonito">
        <div className="card-body d-flex flex-grow-1 p-4">
            <div className="row row-cols-1 align-items-stretch">
                <div className="col">
                    <div className="d-flex d-xxl-flex justify-content-center align-items-center justify-content-xxl-center align-items-xxl-center mb-4 mt-3"><img src={pic} width="100px" alt={alt} /></div>
                </div>
                <div className="col">
                    <h3 className="text-center text-white">{titulo}</h3>
                </div>
                <div className="col">
                    <p className="text-start text-light">{desc}</p>
                </div>
                <div className="col text-center d-lg-flex justify-content-lg-center align-items-lg-end"><a className="btn btn-primary link-light border rounded-pill border-0" data-bss-hover-animate="pulse" role="button" href={btn_link}>{btn_text}</a></div>
            </div>
        </div>
    </div>
</div>
    );
};

export default blog_template;
