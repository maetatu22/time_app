const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
console.log(year+"年"+month+"月"+day+"日");

//出力結果  2020年10月7日


const hours = date.getHours()
const minutes = date.getMinutes();
const seconds = date.getSeconds();
console.log(hours+"時"+minutes+"分"+seconds+"秒");