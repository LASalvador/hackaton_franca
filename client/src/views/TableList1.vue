<template>
<div>
  <span xs12>Temos algumas perguntas...</span>
  <v-select :items="arrayNomes" label="Selecione um imovel" color="#3D7ED7"></v-select>
  <v-layout wrap v-for="mensagem in arrayConversaChat" :key="mensagem.id" xs12>
    <v-flex>
      <div>
        <span>{{mensagem.texto}}</span>
      </div>
      <div v-if="mensagem.tipo == 'pergunta'" class="text-xs-center">
        <v-rating color="#3D7ED7"></v-rating>
      </div>
    </v-flex>
    <br>
  </v-layout>
  <div class="text-xs-center">
    <v-btn block @click="snack('bottom')" class="enviar" small color="#3D7ED7">Enviar Avaliacao</v-btn>
  </div>
  <v-snackbar :bottom="bottom" :top="top" :left="left" :right="right" color="#16AC70" v-model="snackbar">
    <div>Obrigado por completar a avaliação. Sua opinião é muito válida</div>
    <v-icon size="16" @click="snackbar = false"></v-icon>
  </v-snackbar>
</div>
</template>

<script>
import imoveis from '@/dates/json/houses.json'
export default {
  created() {
    this.arrayImoveis = imoveis.houses,
    this.nomesLista()
  },
  data () {
    return {
      arrayImoveis: [] ,
      arrayNomes: [],
      arrayConversaChat: [
        // {
        //   id: 1,
        //   tipo: 'mensagem',
        //   remetente: 'Francis',
        //   identificador: "0",
        //   texto: ''
        // },
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
          texto: 'O que nota voce dá a estetica do imovel?'
        },
        {
          id: 6,
          tipo: 'pergunta',
          remetente: 'Francis',
          identificador: "1",
          texto: 'O que nota voce dá a estrutura do imovel?'
        }
      ],
      respostasConversa: [],
      resposta: null,
      slider: 0,
      top: true,
      bottom: false,
      left: false,
      right: false,
      snackbar: false
    }
  },
  methods: {
    snack (...args) {
      this.top = false
      this.bottom = false
      this.left = false
      this.right = false

      for (const loc of args) {
        this[loc] = true
      }
      this.snackbar = true
    },
    nomesLista() {
      this.arrayImoveis.forEach(a => {
        this.arrayNomes.push(a.nome)
      });
    }  
  }
}
</script>
