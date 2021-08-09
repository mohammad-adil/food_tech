$(document).ready(function () {
let cook = getCookie("data")
let userCookie = cookieParse(cook)
let setCookie = sessionStorage.getItem("Token")
if(!setCookie){
  sessionStorage.setItem("Token", userCookie.Token)
}else{
  sessionStorage.removeItem('Token');
  sessionStorage.setItem("Token", userCookie.Token)
}
});




function getCookie(name) {
  return document.cookie.split("; ").reduce((r, v) => {
    const parts = v.split("=");
    return parts[0] === name ? decodeURIComponent(parts[1]) : r;
  }, "");
}

deleteCookie = (name, path) => {
  setCookie(name, "", -1, path);
};

function cookieParse(cookie) {
  return JSON.parse(cookie.slice(2));
}
