
function displaySVG1() {
    var element = document.getElementById("draw1");
    var Q1done;
    Q1done = localStorage.getItem('vQ1Done');
    if (Q1done === "true") {
    element.style.visibility = "visible";
    element.style.opacity = 0;
    element.style.WebkitAnimationDelay = 0;
    element.style.WebkitAnimationPlayState = "running";      
  }
}
displaySVG1();

  function displaySVG2() {
    var element = document.getElementById("draw2");
    var Q2done;
    Q2done = localStorage.getItem('vQ2Done');
    if (Q2done === "true") {
    element.style.visibility = "visible";
    element.style.opacity = 0;
    element.style.WebkitAnimationDelay = 0.2;
    element.style.WebkitAnimationPlayState = "running";
    }
  }
displaySVG2();

function displaySVG3() {
  var element = document.getElementById("draw3");
  var Q3done;
  Q3done = localStorage.getItem('vQ3Done');
  if (Q3done === "true") {
  element.style.visibility = "visible";
  element.style.opacity = 0;
  element.style.WebkitAnimationDelay = 0.4;
  element.style.WebkitAnimationPlayState = "running";
  }
}
displaySVG3();

function displaySVG4() {
  var element = document.getElementById("draw4");
  var Q4done;
  Q4done = localStorage.getItem('vQ4Done');
  if (Q4done === "true") {
  element.style.visibility = "visible";
  element.style.opacity = 0;
  element.style.WebkitAnimationDelay = 0.6;
  element.style.WebkitAnimationPlayState = "running";
  }
}
displaySVG4();

function displaySVG5() {
  var element = document.getElementById("draw5");
  var Q5done;
  Q5done = localStorage.getItem('vQ5Done');
  if (Q5done === "true") {
  element.style.visibility = "visible";
  element.style.opacity = 0;
  element.style.WebkitAnimationDelay = 0.8;
  element.style.WebkitAnimationPlayState = "running";
  }
}
displaySVG5();

function displaySVG6() {
  var element = document.getElementById("draw6");
  var Q6done;
  Q6done = localStorage.getItem('vQ6Done');
  if (Q6done === "true") {
  element.style.visibility = "visible";
  element.style.opacity = 0;
  element.style.WebkitAnimationDelay = 1;
  element.style.WebkitAnimationPlayState = "running";
  }
}
displaySVG6();

function displaySVG7() {
  var element = document.getElementById("draw7");
  var Q7done;
  Q7done = localStorage.getItem('vQ7Done');
  if (Q7done === "true") {
  element.style.visibility = "visible";
  element.style.opacity = 0;
  element.style.WebkitAnimationDelay = 1;
  element.style.WebkitAnimationPlayState = "running";
  }
}
displaySVG7();  

function changeStar(){
  var OrderedStars = document.getElementsByClassName("star_image")
  console.log(OrderedStars)
  var Q1done = localStorage.getItem('vQ1Done');
  var Q2done = localStorage.getItem('vQ2Done');
  var Q3done = localStorage.getItem('vQ3Done');
  var Q4done = localStorage.getItem('vQ4Done');
  var Q5done = localStorage.getItem('vQ5Done');
  var Q6done = localStorage.getItem('vQ6Done');
  var Q7done = localStorage.getItem('vQ7Done');
  
  if (Q1done === "true"){
    OrderedStars[0].src  = "./assets/star1.png"
  }
  if (Q2done === "true"){
    OrderedStars[1].src  = "./assets/star1.png"
  }
  if (Q3done === "true"){
    OrderedStars[2].src  = "./assets/star1.png"
  }
  if (Q4done === "true"){
    OrderedStars[3].src  = "./assets/star1.png"
  }
  if (Q5done === "true"){
    OrderedStars[4].src  = "./assets/star1.png"
  }
  if (Q6done === "true"){
    OrderedStars[5].src  = "./assets/star1.png"
  }
  if (Q7done === "true"){
    OrderedStars[6].src  = "./assets/star1.png"
  }
}

changeStar();