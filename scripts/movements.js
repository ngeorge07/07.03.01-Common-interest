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
  for (let y = 0; y < allPieces.length; y++) {
    allPieces[y].addEventListener("click", showAnimation);
  }

  const origin = document.querySelector(".grid__item:nth-of-type(13)");
  let newDiv = document.createElement("div");
  let circles;
  let newCircle;
  let i;
  let allCircles;
  origin.appendChild(newDiv);

  function showAnimation(e) {
    console.log(e.target.className);

    if (e.target.className === "pawn-piece") {
      origin.firstChild.innerHTML = chess[2].codeblk;
      origin.firstChild.setAttribute("class", "newDiv movePawn");

      if (document.querySelector(".circle")) {
        allCircles = document.querySelectorAll(".circle");
        for (i = 0; i < allCircles.length; i++) {
          allCircles[i].remove();
        }
      }

      circles = [
        document.querySelector(".grid__item:nth-of-type(3)"),
        document.querySelector(".grid__item:nth-of-type(8)"),
      ];
      for (i = 0; i < circles.length; i++) {
        newCircle = document.createElement("div");
        circles[i].appendChild(newCircle);
        circles[i].firstChild.setAttribute("class", "circle");
      }
    } else if (e.target.className === "rook-piece") {
      origin.firstChild.innerHTML = chess[4].codeblk;
      origin.firstChild.setAttribute("class", "newDiv moveRook");

      if (document.querySelector(".circle")) {
        allCircles = document.querySelectorAll(".circle");
        for (i = 0; i < allCircles.length; i++) {
          allCircles[i].remove();
        }
      }

      circles = [
        document.querySelector(".grid__item:nth-of-type(3)"),
        document.querySelector(".grid__item:nth-of-type(8)"),
        document.querySelector(".grid__item:nth-of-type(11)"),
        document.querySelector(".grid__item:nth-of-type(12)"),
        document.querySelector(".grid__item:nth-of-type(14)"),
        document.querySelector(".grid__item:nth-of-type(15)"),
        document.querySelector(".grid__item:nth-of-type(18)"),
        document.querySelector(".grid__item:nth-of-type(23)"),
      ];
      for (i = 0; i < circles.length; i++) {
        newCircle = document.createElement("div");
        circles[i].appendChild(newCircle);
        circles[i].firstChild.setAttribute("class", "circle");
      }
    } else if (e.target.className === "rook-piece") {
    }
  }
}
