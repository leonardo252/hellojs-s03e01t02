<template>
  <md-layout md-gutter md-column>
    <md-layout md-gutter md-align="center">
      <h1>Cadastros</h1>
    </md-layout>
    <md-layout md-gutter md-align="center">
      <hello-menu></hello-menu>
    </md-layout>
    <md-layout md-gutter md-align="center">
      <router-view></router-view>
    </md-layout>
  </md-layout>
</template>
<script>
module.exports = {
  name:"BaseRouter"
}
</script>