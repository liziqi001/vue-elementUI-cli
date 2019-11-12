import request from "../api/request";

//  查询专项信息的学历信息
export const searchList = async params => {
  const res = await request.post(
    "/hbwsrc-declare-personal/",
    "Special/queryList",
    params
  );
  return res.data;
};

//  新增学历信息
export const add = async params => {
  const res = await request.post(
    "/hbwsrc-declare-personal/",
    "Special/add",
    params
  );
  return res.data;
};

//  修改学历信息
export const change = async params => {
  const res = await request.post(
    "/hbwsrc-declare-personal/",
    "Special/Edit",
    params
  );
  return res.data;
};

//  删除学历信息
export const deleteSpecial = async params => {
  const res = await request.delete(
    "/hbwsrc-declare-personal/",
    "Special/delete",
    params
  );
  return res.data;
};


export const getDetail = async params => {
  const res = await request.post(
    "/hbwsrc-infoplatform-personal/",
    "Special/Query",
    params
  );
  return res.data;
};

//  文件上传接口
export const upload = async params => {
  const res = await request.post("/hbwsrc-pub-server/", "pub/upload", params);
  return res.data;
};

//登录
export const postLogin = async params => {
  const res = await request.post(
    "/hbwsrc-infoplatform-account/",
    "personal/accountLogin",
    params
  );
  return res.data;
};
