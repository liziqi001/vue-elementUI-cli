import Cookies from "js-cookie";
export const cookieExpires = 1;

export const TOKEN_KEY = "personal_token";
export const getName = (code, list) => {
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
};

//设置token
export const setToken = token => {
  Cookies.set(TOKEN_KEY, token, { expires: cookieExpires || 1 });
};
//设置token
export const removeToken =() => {
  Cookies.remove(TOKEN_KEY);
};
//获取token
export const getToken = () => {
  const token = Cookies.get(TOKEN_KEY);
  if (token) return token;
  else return false;
};
//  树形字典转换为普通数组
export const transform=(data,array)=>{
  data.forEach((item,index)=>{
    let node = {};
    node.name = item.name;
    node.value = item.itemvalue1;
    array.push(node);
    if(item.children){
      transform(item.children,array);
    }
  })
  return array;
};
