<template>
  <v-container fill-height fluid>
    <v-layout justify-center wrap>
      <v-flex xs12 md8>
        <material-card>
          <v-card-text class="text-right">
            <v-container py-0>
              <v-layout wrap>
                <v-flex>
                  <div grid-list-xl> 
                  <v-select
                      :items="items"
                      label="Selecione a categoria da Reclamação"
                    ></v-select>
                  </div>
                  <v-textarea v-model="teste" label="Descreva com detalhes sua reclamação" xs12></v-textarea>
                </v-flex>
              </v-layout>
              <div><v-btn small color="red">Prosseguir</v-btn></div>
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
      items: [
        'Problema estrutural',
        'Problema eletrico',
        'Pintura'
        ],
        teste: null
      }
  },
  methods: {

  }
}
</script>
