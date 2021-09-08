const url = "https://gnmmd2ndsemester-6f2a.restdb.io/rest/chess";

const options = {
  headers: {
    "x-apikey": "6134eac643cedb6d1f97ecdd",
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then((data) => animations(data));

function animations(chess) {
  for (let i = 0; i < 25; i++) {
    const template = document.querySelector("template").content;
    const clone = template.cloneNode(true);

    document.querySelector(".grid").appendChild(clone);
  }

  const allPieces = document.querySelectorAll("button");
  console.log(allPieces);
  for (let y = 0; y < allPieces.length; y++) {
    allPieces[y].addEventListener("click", showAnimation);
  }

  const origin = document.querySelector(".grid__item:nth-of-type(13)");
  let newDiv = document.createElement("div");
  origin.appendChild(newDiv);

  function showAnimation(e) {
    console.log(e.target.className);

    if (e.target.className === "pawn-piece") {
      origin.firstChild.innerHTML = chess[2].codeblk;
      origin.firstChild.setAttribute("class", "newDiv movePawn");
    } else if (e.target.className === "queen-piece") {
      origin.firstChild.innerHTML = chess[0].codeblk;
      origin.firstChild.setAttribute("class", "newDiv moveQueen");
    }
  }
}
