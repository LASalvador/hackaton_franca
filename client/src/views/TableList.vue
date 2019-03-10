<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <v-card>
          <v-layout>
             <v-flex xs6 d-flex>
              <v-img
                src="https://cdn.vuetifyjs.com/images/ratings/fortnite1.png"
              ></v-img>
            </v-flex>
            <v-flex xs6 d-flex>
              <v-img
                src="https://cdn.vuetifyjs.com/images/ratings/fortnite1.png"
              ></v-img>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
            <v-card-title>
            <div>
              <span class="headline">Imovel</span>  
            <div class="grey--text font-weight-light">valor</div>
            </div>
          </v-card-title>
          <v-card-text>
            <v-layout>
                <v-flex xs12>
                    <span><b>Endereco:</b></span>
                    <span></span>
                    <br>
                    <span><b>Tipo de Imovel:</b></span>
                    <span></span>
                    <br>
                    <span><b>Tipo de negocio</b></span>
                    <span></span>
                    <br>
                    <span><b>Valor</b></span>
                    <span></span>
                    <br>
                    <span><b>Este imovel é para:</b></span>
                    <span></span>
                    <br>
                </v-flex>
                <v-flex xs12>
                    <span>Avaliacoes</span>
                    <br>
                    <span>Media</span>
                    <v-rating v-model="rating" color="yellow" :readonly="true"></v-rating>
                    <br>
                    <span><b>Arredores:</b></span>
                    <span>x</span>
                    <br>
                    <span><b>Infraestrutura:</b></span>
                    <span>x</span>
                    <br>
                    <span><b>Disponibilidade:</b></span>
                    <span>x</span>
                    <br>
                    <span><b>Documentação:</b></span>
                    <span>x</span>
                </v-flex>
            </v-layout>
          </v-card-text>        
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  data: () => ({
    rating: 4
  })
}
</script>
 
<style lang="scss">
</style>