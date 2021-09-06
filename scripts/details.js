const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("_id");
const url = "https://gnmmd2ndsemester-6f2a.restdb.io/rest/chess/" + id;

const options = {
  headers: {
    "x-apikey": "6134eac643cedb6d1f97ecdd",
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then((data) => showDetails(data));

function showDetails(detail) {
  const template = document.querySelector("template").content;
  const clone = template.cloneNode("true");

  clone.querySelector("h1").textContent = detail.name;
  clone.querySelector("p").textContent = detail.movement;

  document.querySelector("main").appendChild(clone);
}
