<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex xs12 md8>
        <material-card>
          <v-card-text class="text-right">
            <v-container py-0>
              <v-layout wrap align-content-center>
                <v-flex align-selfstart>
                  <div>
                    <v-chip xs12 color="red" text-color="white">
                      <v-avatar color="red darken-4">F</v-avatar>
                        Agora, preencha este formulário!
                    </v-chip >
                    <v-chip xs12 color="red" text-color="white">
                      <v-avatar color="red darken-4">F</v-avatar>
                      Para te ajudarmos!
                    </v-chip >
                  </div>
                        
                  <div>
                    <v-text-field   label="Nome completo"></v-text-field>
                  </div>
                  <div>
                    <v-text-field   label="E-mail"></v-text-field>
                  </div>
                  <div>
                    <v-text-field   label="Contato"></v-text-field>
                  </div>
                  <div>
                    <v-chip xs12 color="red" text-color="white">
                      <v-avatar color="red darken-4">F</v-avatar>
                        Insira os dados do seu imóvel !
                    </v-chip>
                  </div>
                   
                  <div>
                    <v-text-field   label="Endereço"></v-text-field>
                  </div>

                  <div>
                    <v-text-field   label="Complemento"></v-text-field>
                  </div>
                    
                  <v-menu
                  offset-y
                  content-class="dropdown-menu"
                  transition="slide-y-transition">
                  <v-btn
                  slot="activator"
                    color="red"
                    class="redondo"
                  >
                    Categoria
                  </v-btn>
                  <v-card>
                    <v-list dense>
                      <v-list-tile
                        v-for="notification in notifications"
                        :key="notification"
                      >
                        <v-list-tile-title
                          v-text="notification"
                          class="Cor"
                        />
                      </v-list-tile>
                    </v-list>
                  </v-card>
                </v-menu>
                                
                  <div>
                    <v-text-field   label="Endereço"></v-text-field>
                  </div>
                 
                  <div>
                    <v-text-field   label="Endereço"></v-text-field>
                  </div>
                 
                  
                        
                </v-flex>
                <br>
              </v-layout>
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
      resposta: null, 
         notifications: [
        'Apartamento',
        'Casa',
        'Casa em Condomínio',
        'Chácara',
        'Sítio',
        'Terreno',
        'Terreno em Condomínio',
        'Área',
      ]
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
<style scoped>
.redondo{
    background-color:#666;
    border-radius: 20px;
    }
.cor{
  background-color: red !important;
}
</style>

