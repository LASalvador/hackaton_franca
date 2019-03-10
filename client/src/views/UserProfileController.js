import imoveis from '@/dates/json/houses.json'
import image from '@/dates/pictures/ap1_1.jpg'
import reports from './Maps'

export default {
  components: {
    'reports': reports
  },
  created() {
    this.arrayImoveis = imoveis.houses
    this.image = image
    this.avancarConversa()
  },
  data() {
    return {
      image: '',
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
          id: 4,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'pergunta',
          texto: 'O que você precisa fazer?',
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
                funcao: 'comprar'
              },
              {
                id: 2,
                texto: 'Anunciar meu imóvel',
                funcao: 'anunciar'
              },
              {
                id: 3,
                texto: 'Avaliar um imóvel',
                funcao: 'avaliar'
              },
              {
                id: 4,
                texto: 'Reportar um problema',
                funcao: 'reportar'
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
          modelo: 'informacao',
          texto: 'Acho que ainda não nos conhecemos!',
        },
        {
          id: 1,
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
          id: 2,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'informacao',
          texto: 'Muito prazer!',
        },
        {
          id: 3,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'pergunta',
          texto: 'Gostaria de saber sua idade...',
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
          modelo: 'informacao',
          texto: 'Hmm, você é jovem como eu 😀!',
        },   
        {
          id: 5,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'pergunta',
          texto: 'Qual tipo de imóvel te atende?',
          resposta: {
            visivel: true,
            modelo: 'resposta',
            tipo: 'botao',
            opcoes: [
              {
                id: 0,
                texto: 'Casa',
              },
              {
                id: 1,
                texto: 'Apartamento ou casa em condomínio',
              },
              {
                id: 2,
                texto: 'Chácara ou sítio',
              },
              {
                id: 3,
                texto: 'Terreno ou terreno em condomínio',
              },
            ]
          }
        },
        {
          id: 6,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'pergunta',
          texto: 'Legal! Quantos dormitórios você precisa?',
          resposta: {
            visivel: true,
            modelo: 'resposta',
            tipo: 'botao',
            opcoes: [
              {
                id: 0,
                texto: 'Apenas 1',
              },
              {
                id: 1,
                texto: 'Entre 1 e 3'
              },
              {
                id: 2,
                texto: 'Mais de 3'
              },
            ]
          }
        },
        {
          id: 7,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'pergunta',
          texto: 'Suítes são necessárias?',
          resposta: {
            visivel: true,
            modelo: 'resposta',
            tipo: 'botao',
            opcoes: [
              {
                id: 0,
                texto: 'Apenas 1',
              },
              {
                id: 1,
                texto: 'Entre 1 e 3'
              },
              {
                id: 2,
                texto: 'Mais de 3'
              },
            ]
          }
        },
        {
          id: 8,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'pergunta',
          texto: 'Você tem carro?',
          resposta: {
            visivel: true,
            modelo: 'resposta',
            tipo: 'botao',
            opcoes: [
              {
                id: 0,
                texto: 'Apenas 1, meu possante...',
              },
              {
                id: 1,
                texto: 'Tenho 2 xodós'
              },
              {
                id: 2,
                texto: 'Mais de 3, sim, isso mesmo'
              },
            ]
          }
        },
        {
          id: 9,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'pergunta',
          texto: 'Beleza! Qual o valor máximo do imóvel?',
          resposta: {
            visivel: true,
            modelo: 'resposta',
            tipo: 'texto',
            tipoDado: 'number',
            label: 'Consigo pagar até...',
            texto: ''
          }
        },
        {
          id: 10,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'pergunta',
          texto: 'Sobre espaço, qual a área máxima?',
          resposta: {
            visivel: true,
            modelo: 'resposta',
            tipo: 'texto',
            tipoDado: 'number',
            label: 'Até quantos metros quadrados?',
            texto: ''
          }
        },
        {
          id: 11,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'pergunta',
          texto: 'Na área de lazer...',
          resposta: {
            visivel: true,
            modelo: 'resposta',
            tipo: 'botao',
            opcoes: [
              {
                id: 0,
                texto: 'Meu lazer é fazer churrasco',
              },
              {
                id: 1,
                texto: 'Gosto muito de piscina'
              },
              {
                id: 2,
                texto: 'Playground para as crianças!'
              },
              {
                id: 3,
                texto: 'Jogo tênis'
              },
              {
                id: 4,
                texto: 'Gosto é de um salão de festas'
              },
              {
                id: 5,
                texto: 'Tem que ter sala de jogos'
              },
            ]
          },
        },
        {
          id: 12,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'informacao',
          texto: 'A minha casa dos sonhos...'
        },
        {
          id: 13,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'informacao',
          texto: 'Tem que ter uma banheira bem grande!'
        },
        {
          id: 14,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'informacao',
          texto: 'Opa! Conversa errada hehe'
        },
        {
          id: 15,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'informacao',
          texto: 'Voltando ao seu imóvel'
        },
        {
          id: 16,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'pergunta',
          texto: 'O que você quer muito?',
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
                texto: 'Uma lareira ❤'
              },
              {
                id: 2,
                texto: 'Imóvel mobiliado'
              },
              {
                id: 3,
                texto: 'Uma sauna quentinha'
              },
            ]
          },
        },
        {
          id: 17,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'informacao',
          texto: 'Ultima pergunta, juro hehe'
        },
        {
          id: 18,
          foiExibido: false,
          pausaEscrita: 2,
          modelo: 'pergunta',
          texto: 'Sobre segurança...',
          resposta: {
            visivel: true,
            modelo: 'resposta',
            tipo: 'botao',
            opcoes: [
              {
                id: 0,
                texto: 'Precisa ter alarme',
              },
              {
                id: 1,
                texto: 'Condomínio fechado'
              },
              {
                id: 2,
                texto: 'Interfone'
              },
              {
                id: 3,
                texto: 'Portaria 24 horas'
              },
              {
                id: 4,
                texto: 'Vigilância 24 horas'
              },
            ]
          },
        },
      ],
      arrayImoveis: [],
      objetoResposta: null,
      exibComponent: false
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
      console.log('>>>>>>>>>>>>>>>>>>>>', resposta.funcao)
      if (resposta.funcao) {
        if (resposta.funcao === 'alugar' || resposta.funcao === 'comprar') {
          /*this.arrayScriptCompraAluguel.forEach(item => {
            item.id = this.arrayScriptPrincipal.length
            this.arrayScriptPrincipal.push(item)
          })*/

          this.arrayScriptPrincipal.push({
            id: this.arrayScriptPrincipal.length,
            foiExibido: false,
            pausaEscrita: 2,
            modelo: 'pergunta',
            texto: 'Vamos ver alguns imóveis?',
            resposta: {
              visivel: true,
              modelo: 'resposta',
              tipo: 'resultados',
              opcoes: this.arrayImoveis
            }
          })
        }
        if (resposta.funcao === 'anunciar') {
          /*this.arrayScriptCompraAluguel.forEach(item => {
            item.id = this.arrayScriptPrincipal.length
            this.arrayScriptPrincipal.push(item)
          })*/

          this.arrayScriptCompraAluguel.forEach(item => {
            item.id = this.arrayScriptPrincipal.length
            this.arrayScriptPrincipal.push(item)
          })
        }
        if (resposta.funcao === 'avaliar') {
          /*this.arrayScriptCompraAluguel.forEach(item => {
            item.id = this.arrayScriptPrincipal.length
            this.arrayScriptPrincipal.push(item)
          })*/

          this.arrayScriptCompraAluguel.forEach(item => {
            item.id = this.arrayScriptPrincipal.length
            this.arrayScriptPrincipal.push(item)
          })
        }
        if (resposta.funcao === 'reportar') {
          this.objetoResposta =  {
            tipo: 'component',
            modelo: 'reportar'
          }
        }
      }

      this.avancarConversa()
    }
  }
}