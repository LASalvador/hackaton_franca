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
      objetoResposta: {
        visivel: false
      },
    }
  },
  methods: {
    avancarConversa() {
      let objetoProximaInteracao = this.arrayScriptPrincipal.filter(e => e.foiExibido === false)[0];
      this.arrayHistoricoConversa.push(objetoProximaInteracao)
      
      if (objetoProximaInteracao.modelo === 'pergunta' && objetoProximaInteracao.resposta) {
        this.objetoResposta = objetoProximaInteracao.resposta
        this.arrayScriptPrincipal.forEach(item => {
          if (item.id === objetoProximaInteracao.id) {
            item.foiExibido = true
          }
        })
      } else {
        this.arrayScriptPrincipal.forEach(item => {
          if (item.id === objetoProximaInteracao.id) {
            item.foiExibido = true
            this.avancarConversa()
          }
        })
      }
      return true
    },
    responder(resposta) {
      if (resposta.tipo === 'botao') {  
        this.arrayHistoricoConversa.push({
          id: this.arrayConversaChat.length,
          foiExibido: true,
          modelo: 'resposta',
          tipo: 'texto',
          remetente: 'usuario',
          texto: resposta.texto
        })
        




        this.objetoResposta.opcoes.forEach(opcao => {
          if (opcao.id === resposta.id) {
            this.arrayConversaChat.push({
              id: this.arrayConversaChat.length,
              foiExibido: true,
              modelo: 'resposta',
              tipo: 'texto',
              remetente: 'usuario',
              texto: resposta.texto
            })
          }
        })
        return true
      }

      if (resposta.tipo === 'texto' || resposta.tipo === 'numerico') {
        this.arrayConversaChat.push({
          id: this.arrayConversaChat.length,
          foiExibido: true,
          modelo: 'resposta',
          tipo: 'texto',
          remetente: 'usuario',
          texto: this.objetoResposta.resposta
        })
      }
    }
  }
}