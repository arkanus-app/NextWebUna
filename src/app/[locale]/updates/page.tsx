import UpdateCard from "components/cards/cardUpdate"

interface Update {
    titulo: string,
    version: string,
    texto: string,
    picture?: string
}

const updates: Record<string, Update> = {
    0.110 : {
        titulo : "Segredo",
        version : "1.11",
        texto : "(commit secreto = mudanças técnicas na nossa database)"
    },
    0.103 : {
        titulo : "Minecraft",
        version : "1.10.3",
        texto : "+ Adição do Comando /skin (Sei lá pq a gente adicionou isso mas agora tem)\n+ Comandos de /room criar salas privadas nunca foi tão facil. (Função Removida)\n+ Adição do Comando /ping que retorna o ping do bot."
    },
    0.102 : {
        titulo : "Agora com menos bugs",
        version : "1.10.2",
        texto : "+ Correção de bug na hora de editar /ficha /edit atributes\n+ Migração do banco de dados\n+ Nova Host agora mais rapido."
    },

    0.101 : {
        titulo : "Bugs, bugs e mais bugs",
        version : "1.10.1",
        texto : "+ Correção de bug na hora de rolar os dados macros no /di\n+ Comando /gerar atributes adicionado"
    },
    0.100 : {
        titulo: "Provavelmente o maior update deste bot até hoje",
        version: "1.10.0",
        texto: `+ Adicionado modificadores de dado << e >>\nEles tem como objetivo manter apenas os números menores ou iguais (<<) ou maiores ou iguais (>>) que o número à sua direita\nEx.: 10d20<<10 => irá rodar 10 dados de 20 lados e manter apenas os rolls menores ou iguais a 10\n+ Agora os modificadores de dado k e km funcionam juntos\nEx.: 10d20 k3 km5 => manterá os 5 menores e os 3 maiores, o resto será descartado\n+ O bot foi migrado para uma host nova, com mais espaço, processamento e um banco de dados MySQL\n+ Aproveitamos a host nova e migramos todo o save do bot (que era um arquivo .json) para este banco de dados\n+ Servers premium estão finalmente funcionando, e membros premium agora não precisam mais necessariamente estar neste servidor. Atualizamos o /donate para passar as novas informações.\n+ Os comandos /di e /ficha (que agora tem um alias em inglês, /card) foram praticamente refeitos do zero, agora preparados para receber o update de sistemas de RPG diferentes (provavelmente sairá no próximo update)\n+ Adicionado o comando /update, que envia o último update do bot\n+ Foi feito um site para o bot, com algumas informações sobre ele, como um tutorial de como usar, os termos de uso, apresentação da equipe e informações de como doar. O link do site é [https://sites.google.com/view/minikraken](Sim, é google sites porque não temos dinheiro para um domínio próprio) (o site antigo não antigo não existe mais, afinal esse aqui é muito melhor)\n- Comando /lang removido\nO comando /config a partir de agora servirá para configurar tudo relacionado ao bot em seu servidor. Atualmente apenas a língua pode ser modificada, mas ainda adicionaremos mais coisas no futuro`

    },
    0.192 : {
        titulo : "Porque nada é perfeito",
        version : "1.9.2",
        texto : "- Corrigido bug em que expressões numéricas não eram calculadas.\n- Corrigido bug em que qualquer um podia usar comandos que apenas o dono do bot deveria poder."
    },
    0.191 : {
        titulo: "Quem deixou os insetos entrarem?",
        version: "1.9.1",
        texto : "Removido bug em que dados com resultados não-inteiros não eram arredondado de forma correta."
    },
    0.19 : {
        titulo : "A melhor CTO do mundo",
        version : "1.9",
        texto: `+ Adicionados dados "keep minimum" (km):\n5d20km2 => Rolará 5 dados de 20 lados e mantém os dois menores valores.\n+ Adicionados dados explosivos\nd10e10 => Rolará um dado de 10 lados, e rolará de novo caso o resultado seja maior ou igual a 10.\n+ Adicionados dados explosivos indefinidamente\nd10ei10 => Rola um dado de 10 lados, explode em 10 e caso o valor seja de novo maior ou igual a 10, ele explode novamente. Ele continuará explodindo até o valor ser menor que 10.\n(Limitado a 200 explosões por comando para prevenir abusos.)\nOBS: Você não pode usar dados explosivos e dados "keep" ao mesmo tempo.\n+ Adicionado suporte a expressões matemáticas\nAgora você pode escrever d20+6 / (4d20 + d20k2) por exemplo. (Limitado a soma, subtração, multiplicação, divisão e resto)\n+ Adicionados alguns atalhos de escrita\nd = 1d20: Um dado sem o número de lados será entendido como um dado de 20 lados;\n3dk = 3d20k1: Um dado keep sem número na frente será entendido como "mantenha um" (o mesmo se aplica aos dados km);\n5d10e = 5d10e10: Um dado explosivo sem número de explosão será entendido como "exploda no valor mais alto do dado" (o mesmo se aplica ao ei).`
    },
    0.18 : {
        titulo: "Mestre também é gente",
        version: "1.8",
        texto: "Agora o mestre e os jogadores podem salvar dados usando /edit_dices isso vai facilitar para seu amiguinho que joga como paladino e tem 100d3+5d6+9d8+52 na hora do combo.\n Para executar os dados salvos, um novo menu foi adicionado em /di"
    },
    0.17 : {
        titulo : "Edit Dices V1",
        version: "1.7",
        texto: "Agora você pode usar um /editdices e salvar aquele teu combo maroto que vc preparou pro boss tipo 40d6+2d4+204+2d2\nE Pra rodar ele basta usar o /di e selecionar o slot que vc salvou o dado.",
    },
    0.162 : {
        titulo: "Ops, um erro aconteceu",
        version: "1.6.2",
        texto: "Manutenção de Emergência, o bot passou por um probleminha meio complicado no /d caso vc tentasse rolar um d1000 ele ficava spamando acredito que o bug foi corrigido. Como a API do discord é lenta vai levar um tempo até os slashs voltarem a funcionar."
    },
    0.06 : {
        titulo: "Começamos a Anotar as Atualizações",
        version: "1.6",
        texto: "Upgrade no /d agora é possível manter uma quantidade de dados exemplo 4d6k3 roda 4 dados de 6 lados e mantem o maior valor.\n\nAdicionado novas formas de Doação no /donate \nCorreção Nas Traduções tanto português quanto em Inglês.\nDados Macros o Sistema ainda não está finalizado e chegara na próxima atualização, ele vai chegar junto com os benefícios de doador\n/support \n/help",
    },

}

export default function Page() {
    return (
        <>
        <div className="container py-5">
            <div className="row row-cols-1">
                {Object.values(updates).map((update, index) => (
                    <UpdateCard 
                        key={index} 
                        titulo={update.titulo} 
                        version={update.version} 
                        texto={update.texto} 
                        pic={update.picture}
                    />
                ))}
            </div>
        </div>
        </>
    )
}