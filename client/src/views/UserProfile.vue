<template>
  <v-container grid-list-xl fill-height fluid>
    <v-layout justify-center wrap>
      <v-flex xs12 md8>
        <material-card class="v-card-profile" style="width: 100%">
          <v-avatar slot="offset" class="mx-auto d-block" size="70">
            <img src="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg">
          </v-avatar>

          <v-card-text xs12 class="text-xs-center">
            <h4 class="category">Francis</h4>
            <h6 class="category text-gray mb-3">Assistente virtual</h6>
          </v-card-text>
          <div v-for="mensagem in arrayHistoricoConversa" :key="mensagem.id">
            <div class="text-xs-left" v-if="mensagem.modelo !== 'resposta'">
              <v-chip color="#00a5d3" text-color="white">
                <v-avatar color="#0087a5">F</v-avatar>
                {{mensagem.texto}}
              </v-chip>
            </div>
            <div class="text-xs-right" v-else>
              <v-chip color="#ae62a4" text-color="white">
                <v-avatar color="#56539f">Eu</v-avatar>
                {{mensagem.texto}}
              </v-chip>
            </div>
          </div>
        </material-card>
        
        <material-card v-if="objetoResposta">
          <v-layout row wrap v-if="objetoResposta.tipo === 'botao'" justify-space-around>
            <v-flex xs10>
              <div v-for="opcao in objetoResposta.opcoes" :key="opcao.id">
                <v-btn block small color="#00a5d3" @click="responder(opcao)">
                  {{opcao.texto}}
                </v-btn>
              </div>
            </v-flex>
          </v-layout>

          <div v-if="objetoResposta.tipo === 'card'">
            <div v-for="opcao in objetoResposta.opcoes" :key="opcao.id">
              <v-btn block color="blue accent-2" @click="responder(opcao)">
                {{opcao.texto}}
              </v-btn>
            </div>
          </div>

          <div v-if="objetoResposta.tipo === 'texto'">
            <v-flex justify-space-between>
              <v-text-field color="#00a5d3" :type="objetoResposta.tipoDado" v-model="objetoResposta.texto" :label="objetoResposta.label" append-icon="mdi-send" @click:append="responder({texto: objetoResposta.texto})"></v-text-field>
            </v-flex>
          </div>

        </material-card>
        
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script src="./UserProfileController"></script>
