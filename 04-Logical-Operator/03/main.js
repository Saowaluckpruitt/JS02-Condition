let user = prompt("Enter your name");

if (user === "codecamp") {
  let password = prompt("Enter your password");
  if (password != "123456") {
    alert("Wrong password");
  }
} else {
  user = "guest";
}

alert("Welcome " + user);
