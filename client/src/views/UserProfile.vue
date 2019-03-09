<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex xs12 md8>
        <material-card>
          <v-avatar slot="offset" class="mx-auto d-block" size="100">
            <img src="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg">
          </v-avatar>
          <v-card-text class="text-xs-center">
            <h4 class="card-title font-weight-light">Francis</h4>
            <h6 class="category text-gray font-weight-thin mb-3">Assistente virtual</h6>
          </v-card-text>
          <v-form>
            <v-container py-0>
              <v-layout wrap v-for="mensagem in arrayConversaChat" :key="mensagem.id">
                <v-chip slot="activator" color="red" text-color="white">
                  <v-avatar color="red darken-4">F</v-avatar>
                  {{ mensagem.texto }}
                </v-chip>
              </v-layout>
            </v-container>
          </v-form>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script src="./UserProfileController"></script>