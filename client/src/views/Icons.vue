<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout  wrap>
      <v-flex xs12 md8>
        <material-card>
          <v-card-text >
            <v-container py-0>
              <v-layout wrap >
                <v-flex align-selfstart>
                  <div>
                    <spam >
                        Preencha este formulário!
                    </spam >
                     
                    <spam xs12 color="red" text-color="white">
                      Para te ajudarmos!
                    </spam >
                  </div>
                        
                  <div>
                    <v-text-field  id="nome" label="Nome completo"></v-text-field>
                  </div>
                  <div>
                    <v-text-field   label="E-mail"></v-text-field>
                  </div>
                  <div>
                    <v-text-field   label="Contato"></v-text-field>
                  </div>
                  <div>
                    <spam> 
                        Agora, insira os dados do seu imóvel!
                    </spam>
                  </div>
                  <div>
                    <v-text-field   label="Título"></v-text-field>
                  </div>
                   
                  <div>
                    <v-text-field   label="Endereço"></v-text-field>
                  </div>

                  <div>
                    <v-text-field   label="Complemento"></v-text-field>
                  </div>
                  <div>
                    <v-textarea   label="Descrição"></v-textarea>
                  </div>
                 
                  <v-select
                      :items="tipo_imovel"
                      label="Tipo de Imóvel"
                    ></v-select>
                  <v-select
                      :items="tipo_negocio"
                      label="Tipo de Negócio"
                    ></v-select>
                      <h4 class="card-title font-weight-light">O que pretende fazer?</h4>
                     <v-radio-group v-model="radios" :mandatory="false">
                        <v-radio label="Alugar" value="Alugar"></v-radio>
                        <v-radio label="Vender" value="Vender"></v-radio>
                        <v-radio label="Comprar" value="Comprar"></v-radio>
                      </v-radio-group>
                      <v-btn class="enviar" color="red" >
                       Enviar
                      </v-btn>
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
     
      respostasConversa: [],
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
 .enviar {
   border-radius: 20px;
 }
</style>

 
    




                  
                 
                 
                                
                  
                        

