// cookie = a small text file stored on your computer
//          used to remember information about the user
//          saved in name=value pairs

// console.log(navigator.cookieEnabled);
// document.cookie = "firstName=Ptrick; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";
// document.cookie = "lastName=SquarePants; expires=Sun, 1 January 2000 12:00:00 UTC; path=/";

// console.log(document.cookie);

setCookie("email", "Spong@gmial.com", 365);

console.log(document.cookie);

function setCookie(name, value, daysTolive){
  const date = new Date();
  date.getTime(date.getTime() + (daysTolive * 24 * 60 * 60 * 1000));
  let expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value}; ${expires}; path=/`
}