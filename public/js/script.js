function newImage() {
  var d = new Date();
  var t = d.getTime();
  var key = "a" + t;
  var title = "email title";
  var str = {
    key: key,
    title: title,
    date: t,
    opens: 0,
    Sent: "me",
    Type: "Email",
  };

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:3000/api/v1/submit");
  xhr.send("data");

  /*
  fetch("http://localhost:3000/api/v1/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: str,
  }); /*
    .then((response) => response.json())
    .then((total) => {
      display(total);
    });
  //*/
}
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function clearBox() {
  items = document.getElementsByClassName("question");
  for (let index = 0; index < questions.length; index++) {
    items[i].getElementsByClassName("box");
  }
}
function getImage() {
  fetch("http://localhost:3000/api/v1/submit/images/*", {
    headers: new Headers({
      Accept: "application/json",
    }),
    mode: "no-cors",
  })
    .then((response) => response.json())
    .then((tracker) => {});
}
