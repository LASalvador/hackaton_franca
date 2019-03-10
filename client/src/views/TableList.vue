<template>
  <v-container fill-height fluid grid-list-xl xs12>
    <v-layout justify-center wrap xs12>
      <v-flex xs12 md8>
        <material-card xs12>
          <v-card-text class="text-right" xs12>
            <v-container py-0 xs12>
              <v-layout wrap v-for="mensagem in arrayConversaChat" :key="mensagem.id" xs12>
                <v-flex>
                  <div>
                    <v-chip color="red" text-color="white" xs12>
                      <v-avatar color="red darken-4">F</v-avatar>
                        {{mensagem.texto}}
                    </v-chip>
                  </div>
                  <div>

                  </div>
                </v-flex>
                <br>
              </v-layout>
              <div>
                <v-btn @click="teste" small color="red">
                  P
                </v-btn>
              </div>
            </v-container>
          </v-card-text>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      arrayConversaChat: [
        {
          id: 0,
          tipo: 'mensagem',
          remetente: 'Francis',
          texto: 'Olá! Agora vamos realizar uma avaliação do imovel.'
        },
        {
          id: 1,
          tipo: 'mensagem',
          remetente: 'Francis',
          identificador: 3,
          texto: 'Antes precisamos de informações sobre você'
        },
        {
          id: 2,
          tipo: 'pergunta',
          remetente: 'Francis',
          identificador: 1,
          texto: 'Quantos anos você tem?'
        },
        {
          id: 3,
          tipo: 'pergunta',
          remetente: 'Francis',
          identificador: 2,
          texto: 'Qual sua estado civil?'
        },
        {
          id: 4,
          tipo: 'pergunta',
          remetente: 'Francis',
          identificador: 2,
          texto: 'Você tem filhos?'
        },
        {
          id: 5,
          tipo: 'mensagem',
          remetente: 'Francis',
          identificador: 1,
          texto: 'Agora vamos as perguntas'
        },
        {
          id: 6,
          tipo: 'mensagem',
          remetente: 'Francis',
          texto: 'Responda nossas perguntas com qualificacoes de 0 a 5.'
        },
        {
          id: 7,
          tipo: 'pergunta',
          remetente: 'Francis',
          identificador: 2,
          texto: 'O quanto os locais proximos são uteis para você?'
        },
        {
          id: 8,
          tipo: 'pergunta',
          remetente: 'Francis',
          identificador: 1,
          texto: 'O quanto você considera o imovel acessivel?'
        },
        {
          id: 9,
          tipo: 'pergunta',
          remetente: 'Francis',
          identificador: 1,
          texto: 'O quanto voce achar o tamanho dos comodos apropriados?0,'
        },
        {
          id: 10,
          tipo: 'pergunta',
          remetente: 'Francis',
          identificador: 1,
          texto: 'O que nota voce dá a pintura do imovel?'
        }

      ],
      respostasConversa: [],
      resposta: null
    }
  },
  methods: {
    teste () {
      this.respostasConversa.push(resposta)
      console.log('teseee', this.respostasConversa)
    }
  }
}
</script>
