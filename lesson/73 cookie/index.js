const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#lastText");
const submitBtn = document.querySelector("#submitBtn");
const cookieBtn = document.querySelector("#cookieBtn");

submitBtn.addEventListener("click", () => {
  setCookie("firstName", firstText.value, 365);
  setCookie("lastName", lastText.value, 365);
});
cookieBtn.addEventListener("click", () => {
  firstText.value = getCookie("firstName");
  lastText.value = getCookie("lastName");
});

// deleteCookie("firstName");
// deleteCookie("lastName");


function setCookie(name, value, daysTolive){
  const date= new Date();
  date.getTime(date.getTime() + daysTolive * 24 * 60 * 60 * 1000);
  let expires = "expires" + date.toUTCString();
  document.cookie = `${name}=${value}; ${expires}; path=/`
  // console.log(document.cookie)
}
function deleteCookie(name){
  setCookie(name, null, null);
}
function getCookie(name){
  const cDecoded = decodeURIComponent(document.cookie);
  // console.log(cDecoded);
  const cArray = cDecoded.split("; ");
  // console.log(cArray);
  let result = null;

  cArray.forEach(element => {
    if(element.indexOf(name) == 0){
      result = element.substring(name.length + 1);
    }
  })
  return result;
}