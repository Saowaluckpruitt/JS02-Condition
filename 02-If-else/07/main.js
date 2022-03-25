const user = prompt("Enter your name");

if (user === null || user.trim() === "") {
  alert("username is required");
} else {
  const password = prompt("Enter your password");
  if (password === null || password.trim() === ""){ 
  alert("password is required")
} else {
  if(user == "admin" && password === "1234"){
    alert("Hello " + user);
  }
  else if (user === "john" && password === "qwerty"){
  alert("Hello " + user);
} else {
  alert("invalid username or password");
}
