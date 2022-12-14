const lightBtn = document.getElementById("light-btn");
const bg = document.getElementById("bg");
const nganguyen = document.getElementById("nganguyen");
const bd_cake = document.getElementById("bd-cake");
const cake = document.getElementById("cake");
const bd_song = document.getElementById("bd-song");

const timeLeft = document.getElementById("time-left");
const birthday = new Date("Nov 20, 2022 20:11:00").getTime();
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const start = () => {
  setTimeout(function () {
    confetti.start();
  }, 1000 * 11);
};

var myString = "pa, nad, nahv n pt";
var myArray = myString.split("");
var loopTimer;

var frameLoop = () => {
  if (myArray.length > 0) {
    timeLeft.innerHTML += myArray.shift();
  } else {
    clearTimeout(loopTimer);
  }
  var loopTimer = setTimeout("frameLoop()", 200);
};

const theEnd = () => {
    timeLeft.innerHTML = ``
    myString = "Hết òi :3"
    myArray = myString.split("")
    frameLoop()
}

countDown = () => {
  const today = new Date().getTime();
  const timeSpan = birthday - today;
  lightBtn.style.display = "none";
  bd_cake.style.display = "none";

  if (timeSpan <= -day) {
    timeLeft.innerHTML = `...`;
    clearInterval(timeId);
    return;
  }
  if (timeSpan <= 0) {
    lightBtn.style.display = "block";
    nganguyen.style.display = "none";
    timeLeft.style.display = "none";

    lightBtn.addEventListener("click", () => {
      lightBtn.style.display = "none";
      bd_song.play();
      timeLeft.style.display = "block";
      timeLeft.style.color = "#f8c74b";
      timeLeft.innerHTML = `Happy 22nd birthday to Ngan!`;
      bd_cake.style.display = "inline";
      start();
    });

    cake.addEventListener("click", () => {
      confetti.stop();
      bd_cake.style.display = "none";
      lightBtn.innerText = `Dear Ngân,`;
      lightBtn.style.height = "50px";
      lightBtn.style.borderRadius = "20px";
      lightBtn.style.display = "block";
      lightBtn.style.marginLeft = "200px";
      timeLeft.innerHTML = ``;
      frameLoop();

      lightBtn.addEventListener("click", () => {
        bg.style.backgroundColor = "#f8c74b";
        bd_cake.style.display = "none";
        timeLeft.style.padding = "60px";
        timeLeft.style.display = "inline";
        timeLeft.innerHTML = ``;
        timeLeft.style.color = "rgb(0, 3, 44)";
        myString = "Chúng mình rất yêu cậu. Chúc cậu tuổi mới vui vẻ, bình an.";
        myArray = myString.split("");
        setTimeout("frameLoop()",1000*2)
        setTimeout("theEnd()", 1000*11)
      });
    });
    clearInterval(timeId);
    return;
  }

  const days = Math.floor(timeSpan / day);
  const hours = Math.floor((timeSpan % day) / hour);
  const minutes = Math.floor((timeSpan % hour) / minute);
  const seconds = Math.floor((timeSpan % minute) / second);

  timeLeft.innerHTML = `${days}days : ${hours}hrs : ${minutes}mins : ${seconds}s`;
};

const timeId = setInterval(countDown, second);
