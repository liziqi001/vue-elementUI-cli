<style scoped>
.test{
  height:2000px;
}
</style>>
<template>
  <div class="test">
    <a v-for="(item,index) in components" style="margin-left:10px" :key="index" @click="currentTab = item">{{item.name}}</a>
 <router-view class="view"></router-view>
  </div>
</template>

<script>
var components=[
        {
          name: 'a', 
          component: { 
            template:'<div>a</div>'
          }
        },
        {
          name: 'b',
          component: {
            template: require('./b')
          }
        },
        {
          name: 'c',
          component: {
            template: require('./c')
          }
        }
      ]
export default {
  name: 'home',
  components: {
    
  },
  data(){
    return {
      components:components,
      currentTab:components[0],
    }
  },
  created(){
    
  },
  methods:{
    fetchData(){
      console.log(this.$route)
    }
  },
  watch:{
     '$route': 'fetchData'
  }
  
}
</script>
