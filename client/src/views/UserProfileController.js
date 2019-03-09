export default {
  created() {
    this.iniciarConversa()
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
      ],
      objetoResposta: {
        visivel: true,
        modelo: 'opcao',
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
      },
      arrayRespostas: [
        {
          id: 0,
          visivel: true,
          modelo: 'opcao',
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
        }, 
        {
          id: 1,
          visivel: true,
          modelo: 'texto',
          tipo: 'numerico',
          label: '',
        } 
      ]
    }
  },
  methods: {
    iniciarConversa() {
      this.objetoResposta = this.arrayRespostas[0]
    },
    responder(tipoResposta, resposta) {
      if (tipoResposta === 'botao') {            
        this.objetoResposta.opcoes.forEach(opcao => {
          if (opcao.id === resposta.id) {
            this.arrayConversaChat.push({
              id: this.arrayConversaChat.length,
              visivel: true,
              modelo: 'resposta',
              tipo: 'texto',
              remetente: 'usuario',
              texto: resposta.texto
            })
          }
        })
        return true
      }

      if (tipoResposta === 'texto') {
        this.arrayConversaChat.push({
          id: this.arrayConversaChat.length,
          visivel: true,
          modelo: 'resposta',
          tipo: 'texto',
          remetente: 'usuario',
          texto: this.objetoResposta.resposta
        })
      }
    }
  }
}