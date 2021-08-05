$(document).ready(function () {
  console.log(getCookie("data"));
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
