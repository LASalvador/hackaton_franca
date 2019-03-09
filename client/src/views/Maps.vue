<template>
  <v-container fill-height fluid>
    <v-layout justify-center wrap>
      <v-flex xs12 md8>
        <material-card class="v-card-profile">
          <h4 class="card-title font-weight-light" color="red">Aluguel e compra de casas</h4>
          <v-card-text class="text-right">
            <v-form>
            <v-container py-0>
              <v-layout wrap>
                <div v-for="mensagem in arrayConversaChat" :key="mensagem.id">
                <v-flex>
                  <div v-if="mensagem.tipo === 'texto'">
                    <v-chip color="red" text-color="white">
                      <v-avatar color="red darken-4">F</v-avatar>
                        {{mensagem.texto}}
                    </v-chip>
                  </div>
                  <v-flex v-if="mensagem.tipo === 'botao'">
                    <v-btn small color="red" >
                      {{mensagem.texto}}
                    </v-btn>
                  </v-flex>
                  <div>
                    <!-- <v-text-field @click="teste" v-model="resposta" label="Digite uma resposta"></v-text-field> -->
                  </div>
                </v-flex>
                <br>
                </div>
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
          tipo: 'texto',
          remetente: 'francis',
          texto: 'Você gostaria um imóvel para que?'
        },
        {
          id: 0,
          tipo: 'botao',
          remetente: 'francis',
          texto: 'Morar'
        },
        {
          id: 0,
          tipo: 'botao',
          remetente: 'francis',
          texto: 'Meu negócio'
        },
        {
          id: 1,
          tipo: 'texto',
          remetente: 'francis',
          texto: 'Vou te auxiliar hoje!'
        },
        {
          id: 2,
          tipo: 'texto',
          remetente: 'francis',
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
