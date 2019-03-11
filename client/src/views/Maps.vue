<template>
  <div>
    <v-layout wrap>
      <v-flex>
        <div grid-list-xl> 
          <v-select color="#3D7ED7" :items="arrayNomes" label="Selecione o imovel"></v-select>
          <v-select :items="items" label="Selecione a categoria da Reclamação" color="#3D7ED7"></v-select>
        </div>
        <v-textarea v-model="teste" color="#3D7ED7" label="Descreva com detalhes sua reclamação" xs12></v-textarea>
      </v-flex>
    </v-layout>
    <div class="text-xs-center">
      <v-btn small block color="#3D7ED7" class="enviar" @click="snack('bottom')">Enviar</v-btn>
    </div>
    <v-snackbar :bottom="bottom" :top="top" :left="left" :right="right" color="#16AC70" v-model="snackbar">
      <div>Obrigado pelas informações. Em breve entaremos em contato!</div>
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
      arrayNomes: [],
      arrayImoveis: [],
      items: [
        'Problema estrutural',
        'Problema eletrico',
        'Pintura'
        ],
        top: true,
        bottom: false,
        left: false,
        right: false,
        snackbar: false,
        teste: null
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
