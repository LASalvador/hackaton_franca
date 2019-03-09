<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex xs12 md8>
        <material-card class="v-card-profile">
          <v-card-text class="text-right">
            <v-form>
            <v-container py-0>
              <v-layout wrap v-for="mensagem in arrayConversaChat" :key="mensagem.id">
                <v-flex>
                  <div>
                    <v-chip color="red" text-color="white">
                      <v-avatar color="red darken-4">F</v-avatar>
                        {{mensagem.texto}}
                    </v-chip>
                  </div>
                  <div>
                    <v-text-field @click="teste" v-model="resposta" label="Digite uma resposta"></v-text-field>
                  </div>
                </v-flex>
                <br>
              </v-layout>
              <div>
                <v-btn @click="teste" small color="red">
                  Prosseguir
                </v-btn>
              </div>
            </v-container>
          </v-form>
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
          texto: 'Responda nossas perguntas com qualificacoes de 0 a 5.'
        },
        {
          id: 2,
          tipo: 'pergunta',
          remetente: 'Francis',
          identificador: 1,
          texto: 'O que você precisa fazer hoje?'
        },
        {
          id: 3,
          tipo: 'pergunta',
          remetente: 'Francis',
          identificador: 1,
          texto: 'O que você precisa fazer hoje?'
        },
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
