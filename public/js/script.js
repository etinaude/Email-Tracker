var ip = "http://207.148.83.171:3001";
ip = "http://localhost:3001";
function newImage() {
  var d = new Date();
  var t = `${d.getDay()}.${d.getMonth()}.${d.getFullYear()}-${d.getHours()}:${d.getMinutes()} `;
  var key = "id" + d.getTime();
  var title = document.getElementById("title").value;
  var to = document.getElementById("to").value;
  var type = document.getElementById("type").value;

  var str = JSON.stringify({
    key: key,
    title: title,
    date: t,
    opens: 0,
    sent: to,
    type: type,
  });

  fetch(`${ip}/api/v1/submit`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },

    body: `0=${str}`,
  });
  makeTable();
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

/*
function getImage() {
  fetch(`${ip}/api/v1/images/id1600938965116`, {
    headers: new Headers({
      Accept: "application/json",
    }),
  })
    .then((response) => response.json())
    .then((tracker) => { });
}

function openImage() {
  fetch(`${ip}/api/v1/openimage/id1600938965116`, {
    headers: new Headers({
      Accept: "application/json",
    }),
  })
    .then((response) => response.json())
    .then((tracker) => { });
}
*/

function resetImage(id) {
  fetch(`${ip}/api/v1/reset/${id}`, {
    headers: new Headers({
      Accept: "application/json",
    }),
  });
  makeTable();
}

function removeImage(id) {
  fetch(`${ip}/api/v1/remove/${id}`, {
    headers: new Headers({
      Accept: "application/json",
    }),
  });
  makeTable();
}

async function getAll() {
  const response = await fetch(`${ip}/api/v1/all`, {
    headers: new Headers({
      Accept: "application/json",
    }),
  });
  return response.json();
}

async function makeTable() {
  sstr = `<table>
          <tr>
            <th>Control</th>
            <th>ID</th>
            <th>Date</th>
            <th>Title</th>
            <th>Open</th>
            <th>Sent To</th>
            <th>Type</th>
          </tr>
          <tbody>`;
  var count = 0;
  trackers = await getAll();
  console.log(trackers);
  trackers.forEach((e) => {
    console.log(e.opens);
    count += 1;
    sstr += `
    <tr class="table${count % 2}">
    <td class="c1"><button class="reset" onclick="resetImage('${
      e.key
    }')">Reset</button>
    <button class="reset" onclick="removeImage('${e.key}')">Remove</button></td>
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
