<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout  wrap>
      <v-flex xs12 md8>
        <v-container py-0>
          <v-layout wrap >
            <v-flex align-selfstart>
              <div>
                <span>Preencha este formulário!</span>
                <span xs12 color="red" text-color="white">Para te ajudarmos!</span>
              </div>
                    
              <div>
                <v-text-field  color="#0087a5" label="Nome completo"></v-text-field>
              </div>
              <div>
                <v-text-field color="#0087a5" label="E-mail"></v-text-field>
              </div>
              <div>
                <v-text-field color="#0087a5" label="Contato"></v-text-field>
              </div>
              <div>
                <span> 
                    Agora, insira os dados do seu imóvel!
                </span>
              </div>
              <div>
                <v-text-field color="#0087a5" label="Título"></v-text-field>
              </div>
                
              <div>
                <v-text-field  color="#0087a5" label="Endereço"></v-text-field>
              </div>

              <div>
                <v-text-field   color="#0087a5" label="Complemento"></v-text-field>
              </div>
              <div>
                <v-textarea   color="#0087a5" label="Descrição"></v-textarea>
              </div>
              
              <v-select
                  :items="tipo_imovel"
                  label="Tipo de Imóvel"
                  color="#0087a5"
                ></v-select>
              <v-select
                  :items="tipo_negocio"
                  label="Tipo de Negócio"
                  color="#0087a5"
                ></v-select>
                  <h4 class="card-title font-weight-light">O que pretende fazer?</h4>
                  <v-radio-group v-model="radios" :mandatory="false">
                    <v-radio label="Alugar" value="Alugar"></v-radio>
                    <v-radio label="Vender" value="Vender"></v-radio>
                    <v-radio label="Comprar" value="Comprar"></v-radio>
                  </v-radio-group>
                  <v-btn class="enviar" color="#0087a5" @click="snack('bottom')" >
                    Enviar
                  </v-btn>
            </v-flex>
            <br>
          </v-layout>
        </v-container>
        <v-snackbar
          :bottom="bottom"
          :top="top"
          :left="left"
          :right="right"
          color="#16AC70"
          v-model="snackbar"
        >
          <div>Obrigado por mandar seus dados do seu imovel. Em breve entaremos em contato!</div>
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
  data: () => ({
      resposta: null, 
         tipo_imovel: [
        'Apartamento',
        'Casa',
        'Casa em Condomínio',
        'Chácara',
        'Sítio',
        'Terreno',
        'Terreno em Condomínio',
        'Área',
        
      ],
       tipo_negocio: [
        'Residencial',
        'Comercial',
        'Empreendimento',
        ],
    top: true,
    bottom: false,
    left: false,
    right: false,
    snackbar: false,
    radios: ''
  }),
  methods : {
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
