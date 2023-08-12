var hitnumber;
var score = 0;
var countdown;
var gameruuning = false;

var makebubble = () => {
  var cluuter = "";

  for (let i = 1; i <= 150; i++) {
    cluuter += `<div class="circle">${randomnumber()}</div>`;
  }
  document.getElementById("panel-body").innerHTML = cluuter;
};
// to get random number
var randomnumber = () => {
  let number = Math.floor(Math.random() * 100);

  return number;
}; //to display number

// Timer

var Timer = () => {
  if (gameruuning) {
    return;
  }
  let time = 10;

  clearInterval(countdown);
  gameruuning = true;

  countdown = setInterval(() => {
    time--;

    document.getElementById("show-timer").innerHTML = time;

    if (time <= 0) {
      gameruuning = false;
      clearInterval(countdown);
      alert("Time's up!!!!");
      document.getElementById("panel-body").innerHTML = "";
    }
  }, 1000);
};

// hiit

var hit = () => {
  hitnumber = Math.floor(Math.random() * 100);
  document.getElementById("show-hit").innerHTML = hitnumber;
};

// score
var incresescor = () => {
  score += 10;
  document.getElementById("show-score").innerHTML = score;
};

// checked

var checked = (str) => {
  let ans = BigInt(str);
  try {
    if (ans == hitnumber) {
      incresescor();
      console.log("done");
      restart();
    }
  } catch (err) {
    console.log(erre);
  }
};

// app starts here when we click

var restart = () => {
  makebubble();
  Timer();
  hit();

  document.getElementById("panel-body").addEventListener("click", (det) => {
    var clicked = det.target.innerHTML;
    checked(clicked);
  });
};
