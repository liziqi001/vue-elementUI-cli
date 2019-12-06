<style>

</style>

<template>
  <div id="test">
    <el-button @click="openDegree">新增 学位信息</el-button>
    <InfoPanel
      v-for="(item, index) in degree.panelList"
      :type=3
      :key="item.id"
      :index="index"
      :detail="item"
      @editItem="degree_edit"
    />
    <DegreeForm :modal="degree.modal" @editFinished="editFinished" @addFinished="addFinished" @closeModal="degree.modal = false" :item="degree.item"/> 

    <button @click="setId">setId</button>
    <button @click="setId2">setId2</button>
    <button @click="consoleId">打印state.id</button>

  </div>
</template>
<script type="text/ecmascript-6">
import { searchList,postLogin } from "../services/special";
import { setToken, getToken,transform,removeToken } from "../utils/utils.js";


export default {
  data() {
    return {
      degree:{
        modal: false,
        panelList: [],
        item: {}
      },
    };
  },
  computed: {
    
    
  },
  created(){
    //this.getPanelList(3);
  },
  methods: {
    setId(){
      this.$store.commit("setId",1)
    },
    setId2(){
      this.$store.state.id=3
    },
    consoleId(){
      console.log(this.$store.state.id)
    },

    getPanelList: async function(type) {
      const res = await searchList({
        type: type,
        page: { pageSize: 99, pageNum: 1 }
      });
      if (res && res.datas) {
        switch(type) {
          case 2:
              this.education.panelList = res.datas;
              break;
          case 3:
              this.degree.panelList = res.datas;
              break;
          case 4:
              this.workResume.panelList = res.datas;
            break;
          case 5:
              this.medicalQuaCert.panelList = res.datas;
            break;
          case 6:
              this.yspc.panelList = res.datas;
            break;
          case 7:
              this.nspc.panelList = res.datas;
            break;
          case 8:
              this.techTitle.panelList = res.datas;
            break;
          case 9:
              this.personalRewards.panelList = res.datas;
            break;
          case 10:
            this.audit.panelList = res.datas;
            break;
          case 11:
            this.massOrgan.panelList = res.datas;
            break;
          case 12:
            this.morePrac.panelList = res.datas;
            break;
          case 13:
            this.otherLogs.panelList = res.datas;
            break;
          default:
              //默认代码块  
        } 
      }

    },
    editFinished(){
        this.getPanelList(3);

    },
    addFinished(){
        this.getPanelList(3);

    },
    openDegree() {
      this.degree.modal = true;
      this.degree.item = {};
    },
    degree_edit(item) {
      this.degree.item = item;
      this.degree.modal = true;
    },
  }
}
</script>