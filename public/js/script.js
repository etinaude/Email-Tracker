var total = 0;
function addTotal(item) {
  total += item;
}
function display(score) {
  makeSVG(score);
  //#region

  document.getElementById("score").innerHTML = `${score}`;
  document.getElementById("modal").style.display = "block";
  if (score > 90) {
    document.getElementById("describe").innerHTML = "LOL virgin";
  } else if (score > 80) {
    document.getElementById("describe").innerHTML = "Very pure";
  } else if (score > 70) {
    document.getElementById("describe").innerHTML = "Quite pure";
  } else if (score > 50) {
    document.getElementById("describe").innerHTML = "Somewhat pure";
  } else if (score > 40) {
    document.getElementById("describe").innerHTML = "Not pure";
  } else if (score > 30) {
    document.getElementById("describe").innerHTML = "Very un-pure";
  } else {
    document.getElementById("describe").innerHTML = "Dirty";
  }
}

function makeSVG(frac = 0) {
  //135-315
  frac = 100;
  var angle = ((135 + frac * 1.8) * Math.PI) / 180;
  var x = 135 * (Math.cos(angle) - Math.sin(angle)) + 200;
  var y = 135 * (Math.cos(angle) + Math.sin(angle)) + 200;
  //console.log("x", x);
  //console.log("y", y);
  document.getElementById("metric").innerHTML += `
                  <circle fill="#eeeeee" fill-opacity="1" cx="200" cy="200" r="200" />
                  <circle fill="white" fill-opacity="1" cx="200" cy="200" r="130" />
                  <rect fill="white"  fill-opacity="1"  x="0" y="200" width="400" height="200" />
                  <circle fill="#555555" fill-opacity="1" cx="200" cy="200" r="15" />
                  
                  <line x1="200" y1="200" x2="${x}" y2="${y}" stroke="#555555" stroke-width="10" />`;
}

function score() {
  var count = 0;
  var ticked = [];
  items = document.getElementsByClassName("question");
  for (i = 0; i < items.length; i++) {
    if (items[i].getElementsByClassName("box")[0].checked) {
      ticked.push(items[i].getElementsByClassName("box")[0].id);
    }
  }
  //#endregion
  str = "0=";
  ticked.forEach((i) => {
    str += `${i},`;
  });
  str += "0";
  fetch("http://localhost:3000/api/v1/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },

    body: str,
  })
    .then((response) => response.json())
    .then((total) => {
      display(total);
    });
  //*/
}
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function addQuestionToDom(item, id) {
  var ListItem = document.createElement("li");
  ListItem.setAttribute("class", "question");
  ListItem.innerHTML = `<input class="box" type="checkbox" id="${item["id"]}" /> ${item["question"]}<div class="count">${item["count"]}</div>`;
  document.getElementById("question-list").appendChild(ListItem);
}

function clearBox() {
  items = document.getElementsByClassName("question");
  for (let index = 0; index < questions.length; index++) {
    items[i].getElementsByClassName("box");
  }
}

fetch("http://localhost:3000/api/v1/questions", {
  headers: new Headers({
    Accept: "application/json",
  }),
  mode: "no-cors",
})
  .then((response) => response.json())
  .then((questions) => {
    for (let index = 0; index < questions.length; index++) {
      const element = questions[index];
      addQuestionToDom(element, index);
    }
    items = document.getElementsByClassName("question");
    for (i = 0; i < items.length; i++) {
      addTotal(weight(items[i].getElementsByClassName("count")[0].innerHTML));
    }
  });
