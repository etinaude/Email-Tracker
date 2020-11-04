const fetch = require("node-fetch");
const PORT = 3000;
const IP = "https://etvps.tk/tracker/api/v1/";
var key = ""


async function get() {
    var d = new Date();
    var t = `${d.getDay()}/${d.getMonth()}/${d.getFullYear()} - ${d.getHours()}:${d.getMinutes()} `;
    key = `idjestTest${d.getTime()}`
    var str = JSON.stringify({
        key: key,
        title: "jestTitle",
        date: t,
        opens: 0,
        sent: "to",
        type: "type",
    });
    var res = await fetch(`${IP}submit`, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },

        body: `0=${str}`,
    })
    return res.status;
}

async function remove() {
    var res = await fetch(`${IP}remove/${key}`, {
        headers: {
            Accept: "application/json",
        },
    });
    return res.status;
}

test('testing new', () => {
    expect(get()).resolves.toBe(200);
});

test('testing remove', () => {
    expect(remove()).resolves.toBe(200);
});


