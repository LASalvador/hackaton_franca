<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <v-card>
          <v-layout>
             <v-flex xs12 d-flex>
              <v-img
                src="https://cdn.vuetifyjs.com/images/ratings/fortnite1.png"
              ></v-img>
            </v-flex>
          </v-layout>
           <v-rating v-model="rating" color="yellow" :readonly="true"></v-rating>
          <v-divider></v-divider>
            <v-card-title>
            <div>
              <span class="headline">Imovel</span>
              <v-spacer></v-spacer>
              <span class="headline">Status</span>
            
            <div class="grey--text font-weight-light">valor</div>
            </div>
          </v-card-title>
          <v-card-text>
            <v-layout>
              <v-flex xs12>
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
