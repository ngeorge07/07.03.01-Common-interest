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
  const allPieces = document.querySelectorAll("button");
  for (let y = 0; y < allPieces.length; y++) {
    allPieces[y].addEventListener("click", showAnimation);
  }

  /************************ 
  DECLARE VARIABLES
  *************************/
  const origin = document.querySelector(".grid__item:nth-of-type(13)");
  let newDiv = document.createElement("div");
  let circles;
  let newCircle;
  let i;
  let allCircles;
  origin.appendChild(newDiv);

  function showAnimation(e) {
    /************************ 
    FUNCTIONS TO DELETE EXISTING GRAY CIRCLES AND ADD NEW ONES
    *************************/
    function deleteCircles() {
      if (document.querySelector(".circle")) {
        allCircles = document.querySelectorAll(".circle");
        for (i = 0; i < allCircles.length; i++) {
          allCircles[i].remove();
        }
      }
    }
    function addCircles() {
      for (i = 0; i < circles.length; i++) {
        newCircle = document.createElement("div");
        circles[i].appendChild(newCircle);
        circles[i].firstChild.setAttribute("class", "circle");
      }
    }
    /************************ 
    PLACE CLICKED PIECE IN ORIGIN, RUN ANIMATION
    CHECK IF THERE ARE CIRCLES IF YES DELETE THEM, SAVE PLACES FOR NEW ONES IN AN ARRAY, ADD NEW CIRCLES
    *************************/
    if (e.target.className === "moveb pawn-piece") {
      origin.firstChild.innerHTML = chess[5].codeblk;
      origin.firstChild.setAttribute("class", "newDiv movePawn");
      deleteCircles();

      circles = [
        document.querySelector(".grid__item:nth-of-type(3)"),
        document.querySelector(".grid__item:nth-of-type(8)"),
      ];
      addCircles();
    } else if (e.target.className === "moveb rook-piece") {
      origin.firstChild.innerHTML = chess[3].codeblk;
      origin.firstChild.setAttribute("class", "newDiv moveRook");
      deleteCircles();

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
      addCircles();
    } else if (e.target.className === "moveb knight-piece") {
      origin.firstChild.innerHTML = chess[4].codeblk;
      origin.firstChild.setAttribute("class", "newDiv moveKnight");
      deleteCircles();

      circles = [
        document.querySelector(".grid__item:nth-of-type(2)"),
        document.querySelector(".grid__item:nth-of-type(4)"),
        document.querySelector(".grid__item:nth-of-type(6)"),
        document.querySelector(".grid__item:nth-of-type(16)"),
        document.querySelector(".grid__item:nth-of-type(10)"),
        document.querySelector(".grid__item:nth-of-type(20)"),
        document.querySelector(".grid__item:nth-of-type(22)"),
        document.querySelector(".grid__item:nth-of-type(24)"),
      ];
      addCircles();
    } else if (e.target.className === "moveb bishop-piece") {
      origin.firstChild.innerHTML = chess[0].codeblk;
      origin.firstChild.setAttribute("class", "newDiv moveBishop");
      deleteCircles();

      circles = [
        document.querySelector(".grid__item:nth-of-type(1)"),
        document.querySelector(".grid__item:nth-of-type(5)"),
        document.querySelector(".grid__item:nth-of-type(7)"),
        document.querySelector(".grid__item:nth-of-type(9)"),
        document.querySelector(".grid__item:nth-of-type(17)"),
        document.querySelector(".grid__item:nth-of-type(19)"),
        document.querySelector(".grid__item:nth-of-type(21)"),
        document.querySelector(".grid__item:nth-of-type(25)"),
      ];
      addCircles();
    } else if (e.target.className === "moveb queen-piece") {
      origin.firstChild.innerHTML = chess[1].codeblk;
      origin.firstChild.setAttribute("class", "newDiv moveQueen");
      deleteCircles();

      circles = [
        document.querySelector(".grid__item:nth-of-type(1)"),
        document.querySelector(".grid__item:nth-of-type(5)"),
        document.querySelector(".grid__item:nth-of-type(7)"),
        document.querySelector(".grid__item:nth-of-type(9)"),
        document.querySelector(".grid__item:nth-of-type(17)"),
        document.querySelector(".grid__item:nth-of-type(19)"),
        document.querySelector(".grid__item:nth-of-type(21)"),
        document.querySelector(".grid__item:nth-of-type(25)"),
        document.querySelector(".grid__item:nth-of-type(3)"),
        document.querySelector(".grid__item:nth-of-type(8)"),
        document.querySelector(".grid__item:nth-of-type(11)"),
        document.querySelector(".grid__item:nth-of-type(12)"),
        document.querySelector(".grid__item:nth-of-type(14)"),
        document.querySelector(".grid__item:nth-of-type(15)"),
        document.querySelector(".grid__item:nth-of-type(18)"),
        document.querySelector(".grid__item:nth-of-type(23)"),
      ];
      addCircles();
    } else if (e.target.className === "moveb king-piece") {
      origin.firstChild.innerHTML = chess[2].codeblk;
      origin.firstChild.setAttribute("class", "newDiv moveKing");
      deleteCircles();

      circles = [
        document.querySelector(".grid__item:nth-of-type(7)"),
        document.querySelector(".grid__item:nth-of-type(8)"),
        document.querySelector(".grid__item:nth-of-type(9)"),
        document.querySelector(".grid__item:nth-of-type(12)"),
        document.querySelector(".grid__item:nth-of-type(14)"),
        document.querySelector(".grid__item:nth-of-type(17)"),
        document.querySelector(".grid__item:nth-of-type(18)"),
        document.querySelector(".grid__item:nth-of-type(19)"),
      ];
      addCircles();
    }
  }
}
