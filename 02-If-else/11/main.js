let grade = prompt("Enter grade");
let letter =
  grade >= 80
    ? "A"
    : grade >= 70
    ? "B"
    : grade >= 60
    ? "C"
    : grade >= 50
    ? "D"
    : "F";
alert(letter);
