<template>
  <form @submit.prevent="dosave">
    <md-input-container>
      <label>Nome</label>
      <md-input v-model="detalhe.nomepessoa"></md-input>
    </md-input-container>
    <md-button class="md-raised md-primary" type="submit">Salvar</md-button>
    <md-button class="md-raised md-warn" @click.native="dodel" v-if="detalhe.idpessoa">Excluir</md-button>
  </form>
</template>
<script>
const api = require("../components/api").pessoas
module.exports = {
  name:"DetalhePessoa",
  created(){
    if(this.$route.params.idpessoa != 0)
      this.find(this.$route.params.idpessoa)
  },
  data(){
    return {
      detalhe:{nomepessoa:""}
    }
  },
  methods:{
    find(id){
      api.find(id).then(ret => this.detalhe = ret.data)
    },
    dosave(){
      api.save(this.detalhe).then(_=> window.location.href="#/pessoa/list")
    },
    dodel(){
      api.del(this.detalhe.idpessoa).then(_=> window.location.href="#/pessoa/list")
    }
  }
}
</script>