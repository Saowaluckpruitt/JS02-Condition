const point = prompt("Enter your score");

if (!isValidNumber(num)) {
  alert("Invalid number");
} else {
  if (point >= 80) {
    alert("A");
  } else if (point >= 70) {
    alert("B");
  } else if (point >= 60) {
    alert("C");
  } else if (point >= 50) {
    alert("D");
  } else if (num >= 0) {
    alert("F");
  } else {
    alert("Invalid score");
  }
}
