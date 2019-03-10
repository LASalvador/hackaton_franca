import * as easings from 'vuetify/es5/util/easing-patterns'
export default {
  created() {
    this.avancarConversa()
  },
  data() {
    return {
      arrayHistoricoConversa: [],
      arrayScriptPrincipal: [
        {
          id: 0,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'informacao',
          texto: 'Oi, tudo bem? Eu sou o Francis!'
        },
        {
          id: 1,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'informacao',
          texto: 'Vou te auxiliar hoje!'
        },
        {
          id: 2,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'pergunta',
          texto: 'Qual o seu nome?',
          resposta: {
            visivel: true,
            modelo: 'resposta',
            tipo: 'texto',
            tipoDado: 'text',
            label: 'Meu nome é...',
            texto: ''
          }
        },
        {
          id: 3,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'pergunta',
          texto: 'E a sua idade?',
          resposta: {
            visivel: true,
            modelo: 'resposta',
            tipo: 'texto',
            tipoDado: 'number',
            label: 'Minha idade é...',
            texto: ''
          }
        }, 
        {
          id: 4,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'pergunta',
          texto: 'O que você deseja fazer?',
          resposta: {
            visivel: true,
            modelo: 'resposta',
            tipo: 'botao',
            opcoes: [
              {
                id: 0,
                texto: 'Alugar um imóvel',
                funcao: 'alugar'
              },
              {
                id: 1,
                texto: 'Comprar um imóvel',
                funcao: 'alugar'
              },
              {
                id: 2,
                texto: 'Anunciar meu imóvel'
              },
              {
                id: 3,
                texto: 'Avaliar um imóvel'
              },
              {
                id: 4,
                texto: 'Reportar um problema'
              }
            ]
          }
        }, 
      ],
      arrayScriptCompraAluguel: [
        {
          id: 0,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'pergunta',
          texto: 'Você quer um imóvel para que?',
          resposta: {
            visivel: true,
            modelo: 'resposta',
            tipo: 'botao',
            opcoes: [
              {
                id: 0,
                texto: 'Morar',
              },
              {
                id: 1,
                texto: 'Alugar',
              },
            ]
          }
        },
        /*{
          id: 1,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'pergunta',
          texto: 'Seria melhor alugar ou comprar ?',
          resposta: {
            visivel: true,
            modelo: 'resposta',
            tipo: 'botao',
            opcoes: [
              {
                id: 0,
                texto: 'Morar',
              },
              {
                id: 1,
                texto: 'Alugar',
              },
            ]
          }
        },
        {
          id: 2,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'pergunta',
          texto: 'Qual o tipo do imóvel?',
          resposta: {
            visivel: true,
            modelo: 'resposta',
            tipo: 'botao',
            opcoes: [
              {
                id: 0,
                texto: 'Morar',
              },
              {
                id: 1,
                texto: 'Alugar',
              },
            ]
          }
        },
        {
          id: 3,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'pergunta',
          texto: 'Você prefere espaço ou comodidade?',
          resposta: {
            visivel: true,
            modelo: 'resposta',
            tipo: 'botao',
            opcoes: [
              {
                id: 0,
                texto: 'Morar',
              },
              {
                id: 1,
                texto: 'Alugar',
              },
            ]
          }
        },*/
        {
          id: 4,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'pergunta',
          texto: 'Quais arredores são melhores?',
          resposta: {
            visivel: true,
            modelo: 'resposta',
            tipo: 'botao',
            opcoes: [
              {
                id: 0,
                texto: 'Natureza e parques',
              },
              {
                id: 1,
                texto: 'Centro da cidade',
              },
            ]
          }
        },
        {
          id: 5,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'pergunta',
          texto: 'Em que cidade você deseja morar?',
          resposta: {
            visivel: true,
            modelo: 'resposta',
            tipo: 'botao',
            opcoes: [
              {
                id: 0,
                texto: 'São José dos Campos',
              },
              {
                id: 1,
                texto: 'Jacareí',
              },
            ]
          }
        },
        {
          id: 6,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'pergunta',
          texto: 'Você tem quantos filhos?',
          resposta: {
            visivel: true,
            modelo: 'resposta',
            tipo: 'botao',
            opcoes: [
              {
                id: 0,
                texto: 'Nenhum',
              },
              {
                id: 1,
                texto: '1',
              },
              {
                id: 1,
                texto: '2',
              },
            ]
          }
        },
        {
          id: 7,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'pergunta',
          texto: 'Você recebe visitas com frequência?',
          resposta: {
            visivel: true,
            modelo: 'resposta',
            tipo: 'botao',
            opcoes: [
              {
                id: 0,
                texto: 'Sim',
              },
              {
                id: 1,
                texto: 'Não',
              },
            ]
          }
        },
        {
          id: 8,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'pergunta',
          texto: 'Quantos carros tem na sua família?',
          resposta: {
            visivel: true,
            modelo: 'resposta',
            tipo: 'botao',
            opcoes: [
              {
                id: 0,
                texto: '1',
              },
              {
                id: 1,
                texto: '2',
              },
            ]
          }
        },
        {
          id: 9,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'pergunta',
          texto: 'Você mora sozinho?',
          resposta: {
            visivel: true,
            modelo: 'resposta',
            tipo: 'botao',
            opcoes: [
              {
                id: 0,
                texto: 'Sim',
              },
              {
                id: 1,
                texto: 'Não',
              },
            ]
          }
  
        },
        {
          id: 10,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'pergunta',
          texto: 'Quais opções de lazer você mais gosta entre fazer um churrasco, nadas na piscina, jogar tênis...',
          resposta: {
            visivel: true,
            modelo: 'resposta',
            tipo: 'botao',
            opcoes: [
              {
                id: 0,
                texto: 'Churrasco',
              },
              {
                id: 1,
                texto: 'Nadar na piscina',
              },
              {
                id: 2,
                texto: 'Jogar tênis',
              },
            ]
          }
        },
        {
          id: 11,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'pergunta',
          texto: 'O que tem que ter no seu imóvel?(Ar condicionado, lareira, mobiliado)',
          resposta: {
            visivel: true,
            modelo: 'resposta',
            tipo: 'botao',
            opcoes: [
              {
                id: 0,
                texto: 'Ar condicionado',
              },
              {
                id: 1,
                texto: 'Lareira',
              },
              {
                id: 2,
                texto: 'Mobilia',
              },
            ]
          }
        },
        {
          id: 12,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'pergunta',
          texto: 'Quais cômodos são indispensáveis?(Varanda, sacada, cozinha americana...)',
          resposta: {
            visivel: true,
            modelo: 'resposta',
            tipo: 'botao',
            opcoes: [
              {
                id: 0,
                texto: 'Morar',
              },
              {
                id: 1,
                texto: 'Alugar',
              },
            ]
          }
        },
        {
          id: 13,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'pergunta',
          texto: 'Quanto a segurança(alarme, condomínio fechado...)',
          resposta: {
            visivel: true,
            modelo: 'resposta',
            tipo: 'botao',
            opcoes: [
              {
                id: 0,
                texto: 'Morar',
              },
              {
                id: 1,
                texto: 'Alugar',
              },
            ]
          }
        },
        {
          id: 14,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'pergunta',
          texto: 'Você gosta de andar de bicicleta',
          resposta: {
            visivel: true,
            modelo: 'resposta',
            tipo: 'botao',
            opcoes: [
              {
                id: 0,
                texto: 'Morar',
              },
              {
                id: 1,
                texto: 'Alugar',
              },
            ]
          }
        },
        {
          id: 15,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'pergunta',
          texto: 'Você vai muito ao shopping?',
          resposta: {
            visivel: true,
            modelo: 'resposta',
            tipo: 'botao',
            opcoes: [
              {
                id: 0,
                texto: 'Morar',
              },
              {
                id: 1,
                texto: 'Alugar',
              },
            ]
          }
        },
        {
          id: 16,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'pergunta',
          texto: 'Em qual bairro você trabalha?',
          resposta: {
            visivel: true,
            modelo: 'resposta',
            tipo: 'botao',
            opcoes: [
              {
                id: 0,
                texto: 'Morar',
              },
              {
                id: 1,
                texto: 'Alugar',
              },
            ]
          }
        }
      ],
      objetoResposta: null,
    }
  },
  methods: {
    avancarConversa() {
      
      let objetoProximaInteracao = this.arrayScriptPrincipal.filter(e => e.foiExibido === false)[0];
      let interacaoParaHistorico = this.arrayScriptPrincipal.filter(e => e.foiExibido === false)[0];
      
      if (!objetoProximaInteracao) {
        this.objetoResposta = null
        this.arrayHistoricoConversa = this.arrayHistoricoConversa.concat([
          {
            id: this.arrayHistoricoConversa.length,
            foiExibido: true,
            modelo: 'informacao',
            texto: 'Desculpe, ocorreu um erro.'
          },
          {
            id: this.arrayHistoricoConversa.length + 1,
            foiExibido: true,
            modelo: 'informacao',
            texto: 'Podemos conversar mais tarde?'
          }
        ])
        
        return false
      }
      
      interacaoParaHistorico.id = this.arrayHistoricoConversa.length
      this.arrayHistoricoConversa.push(objetoProximaInteracao)
      
      let avancaNovamente = objetoProximaInteracao.modelo === 'pergunta' && objetoProximaInteracao.resposta ? false : true
      
      for (let index = 0; index < this.arrayScriptPrincipal.length; index++) {
        const item = this.arrayScriptPrincipal[index];
        
        if (item.id === objetoProximaInteracao.id) {
          this.arrayScriptPrincipal[index].foiExibido = true
          
          if (avancaNovamente) {
            this.avancarConversa()
          } else this.objetoResposta = objetoProximaInteracao.resposta
          break
        }
      }

      this.$vuetify.goTo(9999, { duration: 800, offset: 0, easing: 'easeInOutCubic' })
      return true

    },
    responder(resposta) {
      let respostaUsuario = resposta.texto || resposta

      this.arrayHistoricoConversa.push({
        id: this.arrayHistoricoConversa.length,
        foiExibido: true,
        modelo: 'resposta',
        texto: respostaUsuario
      })
      
      if (resposta.funcao) {
        if (resposta.funcao === 'alugar' || resposta.funcao === 'comprar') {
          this.arrayScriptCompraAluguel.forEach(item => {
            item.id = this.arrayScriptPrincipal.length
            this.arrayScriptPrincipal.push(item)
          })
        }
      }

      this.avancarConversa()
    }
  }
}