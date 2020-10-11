<<<<<<< HEAD
//var ip = "https://207.148.83.171/tracker/api/v1/";
//ip = "http://localhost:3001/tracker/api/v1/";
var ip = "https://etvps.tk/tracker/api/v1/";
=======
var ip = "https://etvps.tk/tracker/api/v1/";
//ip = "http://localhost:3001/tracker/api/v1/";
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

>>>>>>> 356f21a06a4bf69fffb5bbdb75a920c1c9cff6da
function newImage() {
  var d = new Date();
  var t = `${d.getDay()}/${d.getMonth()}/${d.getFullYear()} - ${d.getHours()}:${d.getMinutes()} `;
  var key = "";
  if (document.getElementById("id").value) {
    key = "id" + document.getElementById("id").value;
  } else {
    key = "id" + d.getTime();
  }
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

  fetch(`${ip}submit`, {
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

async function modal(id) {
  document.getElementById("modal").style.display = "block";
  var h = await history(id);
  var openDates = []

  var mstart = formateDate(new Date(new Date().getFullYear(), new Date().getMonth(), 1).getTime());
  var days = {}
  h.forEach(e => {
    const d = formateDate(e["date"])
    if (days.hasOwnProperty(d)) {
      days[d] += 1
    } else {
      days[d] = 1
    }
  })
  for (const [key, value] of Object.entries(days)) {
    console.log([key, value])
    openDates.push({ title: `${value}`, start: key })
  }
  //document.getElementById("content").innerHTML = strr;

  var calendarEl = document.getElementById('calendar');
  //'2020-09-12'
  var calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
      left: 'prevYear,prev,next,nextYear today',
      center: 'title'
    },
    initialDate: mstart,
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    dayMaxEvents: true, // allow "more" link when too many events
    events: openDates,
    height: 0.7 * vh,
    aspectRatio: 1,
  });

  calendar.render();
}


function formateDate(pre) {
  const d = new Date(parseInt(pre))
  const day = `${d.getDate()}`.length == 1 ? `0${d.getDate()}` : `${d.getDate()}`
  const month = `${d.getMonth()}`.length == 1 ? `0${d.getMonth()}` : `${d.getMonth()}`
  const year = d.getFullYear()
  return `${year}-${month}-${day}`
}


async function history(id) {
  const res = await fetch(`${ip}history/${id}`, {
    headers: new Headers({
      Accept: "application/json",
    }),
  });
  return res.json();
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
  fetch(`${ip}reset/${id}`, {
    headers: new Headers({
      Accept: "application/json",
    }),
  });
  makeTable();
}

function removeImage(id) {
  fetch(`${ip}remove/${id}`, {
    headers: new Headers({
      Accept: "application/json",
    }),
  });
  makeTable();
}


async function getAll() {
  const response = await fetch(`${ip}all`, {
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
  //console.log(trackers);
  trackers.forEach((e) => {
    console.log(e.opens);
    count += 1;
    sstr += `
    <tr class="table${count % 2}">
    <td class="c1"><button class="reset" onclick="resetImage('${e.key
      }')">Reset</button>
    <button class="reset" onclick="removeImage('${e.key}')">Remove</button></td>
    <td onclick="copy('copy${e.key}')">${e.key} <input class="near-hidden" id="copy${e.key}" type="text" value="${ip}openimage/${e.key}.png" /> </td>
    <td>${e.date}</td>
    <td  onclick="modal('${e.key}')">${e.title}</td>
    <td>${e.opens}</td>
    <td>${e.sent}</td>
    <td>${e.type}</td>
    </tr>
    `;
  });

  document.getElementById("table").innerHTML = "</tbody>" + sstr;
}


function copy(dom) {

  var copyText = document.getElementById(dom);
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  copyText.style.display = "none"
}

function showInp() {
  document.getElementById("form").style.display = "flex"
  document.getElementById("showBtn").style.display = "none"
}

makeTable();