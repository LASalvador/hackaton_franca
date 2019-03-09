export default {
  created() {
  },
  data() {
    return {
      arrayConversaChat: [
        {
          id: 0,
          visivel: true,
          modelo: 'pergunta',
          tipo: 'texto',
          remetente: 'francis',
          texto: 'Olá, tudo bem? Eu sou o Francis!'
        },
        {
          id: 1,
          visivel: true,
          modelo: 'pergunta',
          tipo: 'texto',
          remetente: 'francis',
          texto: 'Vou te auxiliar hoje!'
        },
        {
          id: 2,
          visivel: true,
          modelo: 'pergunta',
          tipo: 'texto',
          remetente: 'francis',
          texto: 'O que você precisa fazer hoje?'
        },
        {
          id: 3,
          visivel: true,
          modelo: 'opcao',
          tipo: 'botao',
          remetente: 'francis',
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
        },

      ]
    }
  },
  methods: {
    responder (opcoes, resposta) {
      this.arrayConversaChat.forEach(item => {
        if (item.id === opcoes.id) {
          item.visivel = false
          
          item.opcoes.forEach(opcao => {
            if (opcao.id === resposta.id)
              this.arrayConversaChat.push({
                id: this.arrayConversaChat.length,
                visivel: true,
                modelo: 'resposta',
                tipo: 'texto',
                remetente: 'usuario',
                texto: resposta.texto
              })
          })
        }
      });
    }
  }
}