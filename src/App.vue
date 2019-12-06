<template>
  <div id="app">
    
    <h3><router-link to="/" replace>home</router-link></h3>
    <h3><router-link to="/test" replace>test</router-link></h3>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  methods:{
     
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h3 {
  /* text-decoration: overline; */
  float:left;
  width: 10%;
}
</style>
