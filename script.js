const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "[Capítulo 1: A Entrada na Mansão] Descrição: Você está diante da grande mansão antiga. As janelas estão cobertas de sujeira e as portas estão trancadas. Há duas opções:",
        alternativas: [
            
            {
                texto: "1- Forçar a entrada pela porta da frente.",
                afirmacao: "Forçar a entrada pela porta da frente. Você usa uma ferramenta de arrombamento e consegue abrir a porta. O corredor está coberto de poeira e teias de aranha. Você ouve um sussurro distante vindo do andar superior.(Subir a escada para o andar superior e explorar: O andar superior contém uma sala coberta de objetos antigos, incluindo um diário que parece ter informações sobre a entidade que assombra a mansão. [PROGRESSO: Capítulo 2]) "
            },
            {
                texto: "2- Explorar o jardim ao redor da mansão.",
                afirmacao: "Explorar o jardim ao redor da mansãoVocê encontra um portão enferrujado e uma trilha de passos na terra úmida. O portão está parcialmente aberto. (Ao explorar mais, você cai em uma armadilha oculta.Tentar escapar da armadilha: A armadilha é mortal e você é capturado pela Entidade Sombria que te mata. [FIM: MORTE])"
            }
        ]
    },
    {
        enunciado: "[Capítulo 2: O Interior da Mansão] Descrição: No andar superior da mansão, você encontra um diário antigo que menciona rituais e um porão misterioso. Há duas opções para prosseguir.",
        alternativas: [
            {
                texto: "1- Forçar a entrada pela porta da frente.",
                afirmacao: "Você usa uma ferramenta de arrombamento e consegue abrir a porta. O corredor está coberto de poeira e teias de aranha. Você ouve um sussurro distante vindo do andar superior.(Subir a escada para o andar superior e explorar: O andar superior contém uma sala coberta de objetos antigos, incluindo um diário que parece ter informações sobre a entidade que assombra a mansão. [PROGRESSO: Capítulo 2])"
            },
            {
                texto: "2- Explorar o jardim ao redor da mansão.",
                afirmacao: "Você encontra um portão enferrujado e uma trilha de passos na terra úmida. O portão está parcialmente aberto. Ao explorar mais, você cai em uma armadilha oculta. (Tentar escapar da armadilha: A armadilha é mortal e você é capturado pela Entidade Sombria que te mata. [FIM: MORTE])"
            }
        ]
    },
    {
        enunciado: " [Capítulo 3: O Enigma da Mansão] Descrição: Com os documentos e informações sobre a Entidade Sombria, você deve decidir como enfrentar o problema.",
        alternativas: [
            {
                texto: "1- Usar o ritual descrito no diário para confrontar a Entidade Sombria.",
                afirmacao: "Você realiza o ritual conforme o diário. A energia se torna densa e a Entidade Sombria aparece furiosa. Você precisa agir rapidamente.(Realizar o ritual com precisão: O ritual enfraquece a entidade, mas você precisa sair da mansão antes que ela desabe. [PROGRESSO: Capítulo 4])"
            },
            {
                texto: "2- Seguir o mapa para uma rota secreta que leva a um local desconhecido.",
                afirmacao: "O mapa leva você a um subterrâneo escondido onde você encontra uma passagem para uma sala oculta com novos artefatos e informações sobre como lidar com a entidade. (Explorar a sala oculta: A sala contém um artefato poderoso que pode ser usado para banir a entidade, mas requer mais preparação. [PROGRESSO: Capítulo 4])"
            }
        ]
    },
    {
        enunciado: "[Capítulo 4: O Confronto] Descrição: Agora que você tem a informação e os artefatos necessários, é hora de enfrentar a Entidade Sombria de forma decisiva",
        alternativas: [
            {
                texto: "1- Usar o artefato encontrado para banir a entidade definitivamente.",
                afirmacao: "Você utiliza o artefato encontrado para tentar banir a Entidade Sombria. O artefato emite uma energia poderosa que deve destruir a entidade. (Completar o ritual com sucesso: A entidade é banida e você consegue sair da mansão com segurança, e a mansão é deixada para sempre limpa das forças malignas. [PROGRESSO: Capítulo 5])"
            },
            {
                texto: "2- Tentar selar a mansão para que a entidade não possa sair.",
                afirmacao: "Você tenta selar a mansão usando os artefatos e conhecimentos que encontrou. No entanto, a Entidade Sombria percebe seu plano e te ataca antes que você complete a tarefa. (Falhar em selar a mansão: A entidade o captura e você morre. [FIM: MORTE])"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
