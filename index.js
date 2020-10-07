t = 0;
const elem = document.getElementById("myid");

const myfunc = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  elem.innerHTML = `${hours}時${minutes}分${seconds}秒`;
}

t = setInterval("myfunc()", 500);