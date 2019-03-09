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
          <div v-for="mensagem in arrayHistoricoConversa" :key="mensagem.id">
            <div class="text-xs-left" v-if="mensagem.modelo !== 'resposta'">
              <v-chip color="red" text-color="white">
                <v-avatar color="red darken-4">F</v-avatar>
                {{mensagem.texto}}
              </v-chip>
            </div>
            <div class="text-xs-right" v-else>
              <v-chip color="grey darken-1" text-color="white">
                <v-avatar color="grey darken-4">Eu</v-avatar>
                {{mensagem.texto}}
              </v-chip>
            </div>
          </div>
        </material-card>

        <material-card v-if="objetoResposta.visivel">
          <div v-if="objetoResposta.tipo === 'botao'">
            <div v-for="opcao in objetoResposta.opcoes" :key="opcao.id">
              <v-btn small color="red accent-2" @click="responder(opcao)">
                {{opcao.texto}}
              </v-btn>
            </div>
          </div>

          <div v-if="objetoResposta.tipo === 'card'">
            <div v-for="opcao in objetoResposta.opcoes" :key="opcao.id">
              <v-btn small color="red accent-2" @click="responder(opcao)">
                {{opcao.texto}}
              </v-btn>
            </div>
          </div>

          <div v-if="objetoResposta.tipo === 'numerico'">
            <v-text-field v-model="objetoResposta.resposta" label="Digite uma resposta"></v-text-field>
            <v-btn @click="responder(objetoResposta.resposta)" color="success">text</v-btn>
          </div>

          <div v-if="objetoResposta.tipo === 'texto'">
            <div>
              <v-btn small color="red accent-2" @click="responder(opcao)">
                {{opcao.texto}}
              </v-btn>
            </div>
          </div>

        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script src="./UserProfileController"></script>