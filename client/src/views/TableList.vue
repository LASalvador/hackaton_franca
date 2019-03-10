<template>
  <v-container fill-height fluid grid-list-xl xs12>
    <v-layout wrap xs12>
      <v-flex xs12 md8>
        <material-card xs12>
          <v-card-text class="text-right" xs12>
            <v-container py-0 xs12>
              <span xs12>Responda nossas perguntas com nivel de estrelas.</span>
              <v-layout wrap v-for="mensagem in arrayConversaChat" :key="mensagem.id" xs12>
                <v-flex>
                  <div>
                   <span>
                        {{mensagem.texto}}
                   </span>
                  </div>
                  <div  v-if="mensagem.tipo == 'pergunta'">
                   <v-rating></v-rating>
                  </div>
                </v-flex>
                <br>
              </v-layout>
              <div>
                <v-btn @click="teste" small color="red">
                  Enviar Avaliacao
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
          id: 1,
          tipo: 'mensagem',
          remetente: 'Francis',
          identificador: "0",
          texto: ''
        },
        {
          id: 2,
          tipo: 'pergunta',
          remetente: 'Francis',
          identificador: "1",
          texto: 'O quanto os locais proximos são uteis para você?'
        },
        {
          id: 3,
          tipo: 'pergunta',
          remetente: 'Francis',
          identificador: "2",
          texto: 'O quanto você considera o imovel acessivel?'
        },
        {
          id: 4,
          tipo: 'pergunta',
          remetente: 'Francis',
          identificador: "2",
          texto: 'O quanto você acha o tamanho dos comodos apropriados?'
        },
        {
          id: 5,
          tipo: 'pergunta',
          remetente: 'Francis',
          identificador: "1",
          texto: 'O que nota voce dá a pintura do imovel?'
        }
      ],
      respostasConversa: [],
      resposta: null,
      slider: 0
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
