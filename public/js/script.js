function create() {
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

function clearBox() {
  items = document.getElementsByClassName("question");
  for (let index = 0; index < questions.length; index++) {
    items[i].getElementsByClassName("box");
  }
}
function get_image() {
  fetch("http://localhost:3000/api/v1/questions", {
    headers: new Headers({
      Accept: "application/json",
    }),
    mode: "no-cors",
  })
    .then((response) => response.json())
    .then((tracker) => {});
}
