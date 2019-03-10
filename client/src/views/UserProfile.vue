<template>
  <v-container grid-list-xl fill-height fluid>
    <v-layout justify-center wrap>
      <v-flex xs12 md8>
        <material-card class="v-card-profile" style="width: 100%">
          <v-avatar slot="offset" class="mx-auto d-block" size="70">
            <img :src="avatar" color="white">
          </v-avatar>

          <v-card-text xs12 class="text-xs-center">
            <h4 class="category">Francis</h4>
            <h6 class="category text-gray mb-3">Assistente virtual</h6>
          </v-card-text>
          <div v-for="mensagem in arrayHistoricoConversa" :key="mensagem.id">
            <div class="text-xs-left" v-if="mensagem.modelo !== 'resposta'">
              <v-chip color="#3D7ED7" text-color="white">
                <v-avatar color="#4a75a2">F</v-avatar>
                {{mensagem.texto}}
              </v-chip>
            </div>
            <div class="text-xs-right" v-else>
              <v-chip color="#40c491" text-color="white">
                <v-avatar color="#16a870">Eu</v-avatar>
                {{mensagem.texto}}
              </v-chip>
            </div>
          </div>
        </material-card>
        
        <material-card v-if="objetoResposta">
          <v-layout row wrap v-if="objetoResposta.tipo === 'botao'" justify-space-around>
            <v-flex xs10>
              <div v-for="opcao in objetoResposta.opcoes" :key="opcao.id">
                <v-btn block small color="#3D7ED7" @click="responder(opcao)">
                  {{opcao.texto}}
                </v-btn>
              </div>
            </v-flex>
          </v-layout>

          <div v-if="objetoResposta.tipo === 'texto'">
            <v-flex justify-space-between>
              <v-text-field color="#3D7ED7" :type="objetoResposta.tipoDado" v-model="objetoResposta.texto" :label="objetoResposta.label" append-icon="mdi-send" @click:append="responder({texto: objetoResposta.texto})"></v-text-field>
            </v-flex>
          </div>
          
          <div v-if="objetoResposta.tipo === 'imagem'">
            <v-flex justify-space-between>
              <v-text-field type="file" accept="image/*" @input="responder('Foto')"></v-text-field>
            </v-flex>
          </div>

          <div v-if="objetoResposta.tipo === 'resultados'">
            <v-layout v-for="imovel in objetoResposta.opcoes" :key="imovel.id">
              <v-flex xs12>
                <v-card color="#DDDDDD" text-color="white" :title="imovel.nome" @click="objetoImovelSelecionado = imovel; sheet = true">
                  <v-img :src="imovel.fotos[0]" aspect-ratio="2.30"></v-img>
                  <v-card-title>
                    <div class="title">{{imovel.nome}}</div>
                    <div>
                      <v-chip color="green" text-color="white" label>{{imovel.tipoImovel}} - {{imovel.status}}</v-chip>
                      <v-chip color="green" text-color="white" label>R$ {{imovel.valor.toFixed(2)}}</v-chip>
                    </div>
                    <p class="black--text">{{imovel.endereco}}</p>
                  </v-card-title>
                </v-card>
              </v-flex>
            </v-layout>
          </div>

          <div v-if="objetoResposta.tipo === 'component'">
            <reports v-if="objetoResposta.modelo === 'reportar'"></reports>
            <avaliar v-if="objetoResposta.modelo === 'avaliar'"></avaliar>
            <anunciar v-if="objetoResposta.modelo === 'anunciar'"></anunciar>
          </div>

        </material-card>
        
      </v-flex>
    </v-layout>

    <v-bottom-sheet v-model="sheet">
      <v-container v-if="sheet">
        <v-layout>
          <v-flex xs12>
            <v-card text-color="white" :title="objetoImovelSelecionado.nome">
              <!-- <v-img :src="objetoImovelSelecionado.fotos[1]" aspect-ratio="1.5"></v-img> -->
              <v-carousel hide-controls hide-delimiters height="220">
              <v-carousel-item v-for="(foto,i) in objetoImovelSelecionado.fotos" :key="i" :src="foto"></v-carousel-item>
              </v-carousel>
              <v-card-title>
                <div class="title">{{objetoImovelSelecionado.nome}}</div>
                <div class="subtitle">{{objetoImovelSelecionado.tipoImovel}} - {{objetoImovelSelecionado.status}} - Valor R$ {{objetoImovelSelecionado.valor.toFixed(2)}}</div>
                <v-flex xs12>
                <v-rating v-model="objetoImovelSelecionado.avaliacoes.media" readonly background-color="#ae62a4" color="indigo" size="20"></v-rating>
                </v-flex>
                <v-chip color="#3D7ED7" text-color="white" label>
                  Código {{objetoImovelSelecionado.id}}
                </v-chip>
                <v-chip color="#3D7ED7" text-color="white" label>
                  {{ ((Math.random(5) * 10) + 1).toFixed(0) }} Dormitórios
                </v-chip>
                <v-chip color="#3D7ED7" text-color="white" label>
                  {{ ((Math.random(1) * 1.5) + 1).toFixed(0) }} Vagas
                </v-chip>
                <v-chip color="#3D7ED7" text-color="white" label>
                  {{ ((Math.random(700) * 100) + 30).toFixed(0) }} m²
                </v-chip>
                <v-chip color="#3D7ED7" text-color="white" label>
                  {{ ((Math.random(700) * 100) + 30).toFixed(0) }} Visualizações
                </v-chip>
                <p text-color="black">{{objetoImovelSelecionado.endereco}}</p>
                <p text-color="black">{{objetoImovelSelecionado.descricao}}</p>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-bottom-sheet>
  </v-container>
</template>

<script src="./UserProfileController"></script>

<style lang="scss" scoped>
.sombra{
  box-shadow: 2px 2px 2px grey;
}
</style>

