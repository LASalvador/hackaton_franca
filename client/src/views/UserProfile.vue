<template>
  <v-container fill-height fluid>
    <v-layout wrap>
      <v-flex xs12 md8>
        <material-card>
          <v-avatar slot="offset" class="mx-auto d-block" size="70">
            <img src="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg">
          </v-avatar>
          <v-card-text class="text-xs-center">
            <h4 class="card-title font-weight-light">Francis</h4>
            <h6 class="category text-gray font-weight-thin mb-3">Assistente virtual</h6>
          </v-card-text>
              <div v-for="mensagem in arrayConversaChat" :key="mensagem.id">
                <v-flex xs12 v-if="mensagem.visivel">
                  <div v-if="mensagem.tipo === 'texto'">
                    <v-chip :color="mensagem.remetente === 'francis' ? 'red' : 'grey darken-1'" text-color="white">
                      <v-avatar :color="mensagem.remetente === 'francis' ? 'red darken-4' : 'grey darken-4'">
                        {{mensagem.remetente === 'francis' ? 'F' : 'Eu' }}
                      </v-avatar>
                      {{mensagem.texto}}
                    </v-chip>
                  </div>
                  <div v-if="mensagem.tipo === 'botao'">
                    <div v-for="botao in mensagem.opcoes" :key="botao.id">
                      <v-btn small color="red accent-2" @click="responder(mensagem, botao)">
                        {{botao.texto}}
                      </v-btn>
                    </div>
                  </div>
                </v-flex>
              </div>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script src="./UserProfileController"></script>