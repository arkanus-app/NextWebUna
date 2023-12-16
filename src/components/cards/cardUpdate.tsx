interface UpdateProps {
    titulo: string;
    version: string;
    pic?: string;
    texto?: string;
}

const UpdateCard = ({ titulo, version, pic, texto }: UpdateProps) => {
    return (
        <div className="col">
            <div className="border rounded border-1 border-primary-subtle px-4 py-2 m-2">
                <h2 className="text-center text-light">{titulo}</h2>
                <h4 className="text-center text-primary">{version}</h4>
                <hr className="text-primary" />
                <p className="text-break text-light">
                    {texto && texto.split('\n').map((line, index) => (
                        <span key={index}>
                            {line.split(' ').map((word, wordIndex) => (
                                <span key={wordIndex}>
                                    {word.startsWith('/') ? <span className="text-primary">{word}</span> : word}
                                    {' '}
                                </span>
                            ))}
                            <br />
                        </span>
                    ))}
                </p>
                <hr className="text-primary" />
                {pic && <img className="rounded img-fluid" src={pic} alt="Imagem de atualização" />}
            </div>
        </div>
    );
};

export default UpdateCard;