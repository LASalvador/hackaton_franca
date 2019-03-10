<template>
  <v-container fill-height fluid>
    <v-layout justify-center wrap>
      <v-flex xs12 md8>
        <v-layout wrap>
          <v-flex>
            <div grid-list-xl> 
            <v-select
                :items="items"
                label="Selecione a categoria da Reclamação"
                color="#0087a5"
              ></v-select>
            </div>
            <v-textarea v-model="teste" label="Descreva com detalhes sua reclamação" xs12></v-textarea>
          </v-flex>
        </v-layout>
        <div>
          <v-btn small color="#0087a5" class="enviar" @click="snack('bottom')">Enviar</v-btn>
        </div>
         <v-snackbar
          :bottom="bottom"
          :top="top"
          :left="left"
          :right="right"
          v-model="snackbar">
          <div>Obrigado pelas informações. Em breve entaremos em contato!</div>
          <v-icon
            size="16"
            @click="snackbar = false"
          > </v-icon>
        </v-snackbar>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      items: [
        'Problema estrutural',
        'Problema eletrico',
        'Pintura'
        ],
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
    }
  }
}
</script>
<style scoped>
  .enviar {
   border-radius: 20px;
 }
</style>
