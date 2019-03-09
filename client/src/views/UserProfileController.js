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
          modelo: 'informacao',
          texto: 'Olá, tudo bem? Eu sou o Francis!'
        },
        {
          id: 1,
          foiExibido: false,
          modelo: 'informacao',
          texto: 'Vou te auxiliar hoje!'
        },
        {
          id: 2,
          foiExibido: false,
          modelo: 'pergunta',
          texto: 'O que você precisa fazer hoje?',
          resposta: {
            visivel: true,
            modelo: 'resposta',
            tipo: 'botao',
            opcoes: [
              {
                id: 0,
                texto: 'Alugar'
              },
              {
                id: 1,
                texto: 'Comprar'
              },
              {
                id: 2,
                texto: 'Anunciar'
              },
              {
                id: 3,
                texto: 'Avaliar imóvel'
              },
              {
                id: 4,
                texto: 'Reportar um problema'
              }
            ]
          }
        }, 
      ],
      arrayScriptCompraAluguel: [],
      objetoResposta: null,
    }
  },
  methods: {
    avancarConversa() {

      let objetoProximaInteracao = this.arrayScriptPrincipal.filter(e => e.foiExibido === false)[0];
      
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

      this.arrayHistoricoConversa.push(objetoProximaInteracao)
      
      let avancaNovamente = objetoProximaInteracao.modelo === 'pergunta' && objetoProximaInteracao.resposta ? false : true
      
      this.arrayScriptPrincipal.forEach(item => {
        if (item.id === objetoProximaInteracao.id) {
          item.foiExibido = true
          
          if (avancaNovamente) {
            this.avancarConversa()
          } else this.objetoResposta = objetoProximaInteracao.resposta
        }
      })

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
      
      this.avancarConversa()
    }
  }
}