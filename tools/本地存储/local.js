// 添加 localStorage

 //localStorage存值永久有效
function setItems(name,userName, promise){
    var user = {};
    user.userName = userName;
    user.promise  = promise;
    localStorage.setItem(name,JSON.stringify(user));
}
setItems('userinfo',"管理员", '111111')
//localStorage取值
function getItems(name){
    var data = JSON.parse(localStorage.getItem(name));
    return data
    // console.log("userName:"+data.userName+'\r promise:'+data.promise);
}
let getItems2 = getItems('userinfo');
let userName = getItems2.userName;
let promise = getItems2.promise;
console.log(userName+"userName")
console.log(promise+"promise")

//localStorage删除指定键对应的值
function deleteItem(name){
    localStorage.removeItem(name);
    console.log(localStorage.getItem(name));
}
deleteItem('userinfo')

