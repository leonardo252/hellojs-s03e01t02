<template>
  <div>
    <md-button class="md-raised md-primary" href="#/pessoa/0">
      <md-icon>add</md-icon>
      Novo
    </md-button>
    <md-table>
      <md-table-header>
        <md-table-row>
          <md-table-head>ID</md-table-head>
          <md-table-head>Nome</md-table-head>
          <md-table-head></md-table-head>
        </md-table-row>
      </md-table-header>
      <md-table-body>
        <md-table-row v-for="item in lista" :key="item.idpessoa">
          <md-table-cell>{{item.idpessoa}}</md-table-cell>
          <md-table-cell>{{item.nomepessoa}}</md-table-cell>
          <md-table-cell>
            <md-button class="md-icon-button" :href="`#/pessoa/${item.idpessoa}`">
              <md-icon>edit</md-icon>
            </md-button>
          </md-table-cell>
        </md-table-row>
      </md-table-body>
    </md-table>
  </div>
</template>
<script>
const api = require("../components/api").pessoas
module.exports = {
  name: "ListaPessoas",
  created(){
    this.buscar()
  },
  data(){
    return {
      lista:[]
    }
  },
  methods:{
    buscar(){
      api.list().then(ret => this.lista = ret.data)
    }
  }
}
</script>