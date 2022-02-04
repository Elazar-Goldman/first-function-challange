// First Challange
function greatings() {
  console.log("hello");
}
// Second Challange
function greatPerson(name) {
  console.log("hello" + name);
}

// Third Challange
function sum(num1, num2) {
  return num1 + num2;
}

// Fourth Challange
function sqr(num) {
  return num * num;
}

// Fifth Challange
function rightAngle(a, b, c) {
  return sqr(a) + sqr(b) === sqr(c);
}

// Sixth Challange
//look for the funciton with the same name in the HTML
function changeColor() {
  // collecting div element
  let myDiv = document.getElementById("color-choice");
  // collecting input element
  let myColor = document.getElementById("color-text");
  myDiv.style.backgroundColor = myColor.value;
}

// Seventh Challange
function checkColor1() {
  // collecting input element
  let myDiv = document.getElementById("color-choice");
  // collecting button element
  let btn1 = document.getElementById("btn1");
  // changeing the backgroundColor of the input
  myDiv.style.backgroundColor = btn1.textContent;
}

// commentst like function CheckColor1
function checkColor2() {
  let myDiv = document.getElementById("color-choice");
  let btn2 = document.getElementById("btn2");
  myDiv.style.backgroundColor = btn2.textContent;
}
function checkColor3() {
  let myDiv = document.getElementById("color-choice");
  let btn3 = document.getElementById("btn3");
  myDiv.style.backgroundColor = btn3.textContent;
}
