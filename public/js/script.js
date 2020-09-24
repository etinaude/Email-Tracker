function newImage() {
  var d = new Date();
  var t = `${d.getDay()}.${d.getMonth()}.${d.getFullYear()}-${d.getHours()}:${d.getMinutes()} `;
  var key = "id" + d.getTime();
  var title = "email title";

  var str = JSON.stringify({
    key: key,
    title: title,
    date: t,
    opens: 0,
    sent: "me",
    type: "Email",
  });

  fetch("http://localhost:3000/api/v1/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },

    body: `0=${str}`,
  });
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
  fetch("http://localhost:3000/api/v1/images/id1600938965116", {
    headers: new Headers({
      Accept: "application/json",
    }),
    mode: "no-cors",
  })
    .then((response) => response.json())
    .then((tracker) => {});
}

function openImage() {
  fetch("http://localhost:3000/api/v1/openimage/id1600938965116", {
    headers: new Headers({
      Accept: "application/json",
    }),
    mode: "no-cors",
  })
    .then((response) => response.json())
    .then((tracker) => {});
}

async function getAll() {
  const response = await fetch("http://localhost:3000/api/v1/all", {
    headers: new Headers({
      Accept: "application/json",
    }),
    mode: "no-cors",
  });
  return response.json();
}

async function makeTable() {
  sstr = `<table>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Title</th>
            <th>Open</th>
            <th>Sent</th>
            <th>Type</th>
          </tr>
          <tbody>`;
  var count = 0;
  trackers = await getAll();
  console.log(trackers);
  trackers.forEach((e) => {
    count += 1;
    sstr += `
    <tr class="table${count % 2}">
    <td>${e.key}</td>
    <td>${e.date}</td>
    <td>${e.title}</td>
    <td>${e.opens}</td>
    <td>${e.sent}</td>
    <td>${e.type}</td>
    </tr>
    `;
  });

  document.getElementById("table").innerHTML = "</tbody>" + sstr;
}

makeTable();
