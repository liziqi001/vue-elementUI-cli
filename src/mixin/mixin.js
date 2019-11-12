import {  postLogin } from "../services/special.js";
import { setToken, getToken,transform,removeToken } from "../utils/utils.js";

export default {
  data() {
    return {
      fileIp: process.env.VUE_APP_FILE
    };
  },
  created() {
    this.login();
  },
  methods: {
    login(){
      if (!getToken()) {
        if (process.env.NODE_ENV == "development") {
          postLogin({ username: "13297911102" , password: "911102" }).then(res => {
            setToken(res.datas.token);
          });
        }
      }
    },
    frushLogin(){
      removeToken();
      this.login()
    },
    getName(code, list) {
      let dicName = "";
      if (list && list.length > 0) {
        for (let j = 0; j < list.length; j++) {
          let value = list[j];
          if (code == value.itemvalue1) {
            dicName = value.name;
          }
        }
      }
      return dicName;
    },
    //树形枚举
    getTreeName (code, list) {
      let name = '';
      let newArr = transform(list,[]);
      for(let j = 0 ; j < newArr.length ; j++ ){
        let value = newArr[j];
        if(code == value.value){
          name = value.name;
        }
      }
      return name;
    },
    
  }
};
