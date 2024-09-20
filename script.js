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
        enunciado: "[Capítulo 5: O Desfecho] Descrição: Você chegou ao momento final. Com todas as informações e artefatos, você deve tomar a última decisão sobre o destino da mansão e da Entidade Sombria.",
        alternativas: [
            {
                texto: "1- Destruir a fonte da entidade usando um ritual final.",
                afirmacao: "[Escolha 1: Destruir a fonte da entidade usando um ritual final.] Você realiza um ritual poderoso para destruir a fonte da Entidade Sombria. A energia do ritual é intensa e destrói a entidade e suas forças malignas. (Completar o ritual com sucesso: A entidade é destruída, e você consegue sair da mansão em segurança. A mansão é finalmente limpa de sua influência. [FIM: FINAL FELIZ])"
            },
            {
                texto: "2- Tentar usar um feitiço para selar a entidade dentro da mansão.",
                afirmacao: "[Escolha 2: Tentar usar um feitiço para selar a entidade.] Você tenta usar um feitiço encontrado para selar a entidade dentro da mansão. O feitiço tem efeitos inesperados e falha. (Feitiço mal executado: A entidade se enfurece e o ataque é fatal. Você morre na mansão. [FIM: MORTE])"
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
