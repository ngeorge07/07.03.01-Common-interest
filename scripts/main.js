const url = "https://gnmmd2ndsemester-6f2a.restdb.io/rest/chess";

// And the API-key:

const options = {
  headers: {
    "x-apikey": "6134eac643cedb6d1f97ecdd",
  },
};

fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    // handleData(data);

    generateBoard(data);
  });

function generateBoard(chess) {
  /************************ 
   MAKE BOARD OUT OF GRID ITEMS
  *************************/
  for (let i = 0; i < 64; i++) {
    const template = document.querySelector("template").content;
    const clone = template.cloneNode(true);

    document.querySelector(".grid").appendChild(clone);
  }

  /************************ 
   PLACE EACH SET OF PIECES INTO THE RIGHT GRID SPACE
  *************************/
  const blk_pawns = [
    document.querySelector(".grid__item:nth-of-type(9)"),
    document.querySelector(".grid__item:nth-of-type(10)"),
    document.querySelector(".grid__item:nth-of-type(11)"),
    document.querySelector(".grid__item:nth-of-type(12)"),
    document.querySelector(".grid__item:nth-of-type(13)"),
    document.querySelector(".grid__item:nth-of-type(14)"),
    document.querySelector(".grid__item:nth-of-type(15)"),
    document.querySelector(".grid__item:nth-of-type(16)"),
  ];
  const wht_pawns = [
    document.querySelector(".grid__item:nth-of-type(49)"),
    document.querySelector(".grid__item:nth-of-type(50)"),
    document.querySelector(".grid__item:nth-of-type(51)"),
    document.querySelector(".grid__item:nth-of-type(52)"),
    document.querySelector(".grid__item:nth-of-type(53)"),
    document.querySelector(".grid__item:nth-of-type(54)"),
    document.querySelector(".grid__item:nth-of-type(55)"),
    document.querySelector(".grid__item:nth-of-type(56)"),
  ];
  const blk_rooks = [
    document.querySelector(".grid__item:nth-of-type(1)"),
    document.querySelector(".grid__item:nth-of-type(8)"),
  ];
  const wht_rooks = [
    document.querySelector(".grid__item:nth-of-type(64)"),
    document.querySelector(".grid__item:nth-of-type(57)"),
  ];
  const blk_knights = [
    document.querySelector(".grid__item:nth-of-type(2)"),
    document.querySelector(".grid__item:nth-of-type(7)"),
  ];
  const wht_knights = [
    document.querySelector(".grid__item:nth-of-type(63)"),
    document.querySelector(".grid__item:nth-of-type(58)"),
  ];
  const blk_bishops = [
    document.querySelector(".grid__item:nth-of-type(62)"),
    document.querySelector(".grid__item:nth-of-type(59)"),
  ];
  const wht_bishops = [
    document.querySelector(".grid__item:nth-of-type(3)"),
    document.querySelector(".grid__item:nth-of-type(6)"),
  ];

  /************************ 
   CREATE BUTTONS INSIDE PAWNS
  *************************/
  for (let i = 0; i < 8; i++) {
    blk_pawns[i].appendChild(document.createElement("button"));
    wht_pawns[i].appendChild(document.createElement("button"));

    blk_pawns[i].firstChild.innerHTML = chess[2].codeblk;
    wht_pawns[i].firstChild.innerHTML = chess[2].codewht;

    //to add class to buttons just in case we'll need it later :)
    // wht_pawns[i].firstChild.classList.add("pawns");
    // blk_pawns[i].firstChild.classList.add("pawns");
  }

  /************************ 
   ADD CLASS TO ALL PAWNS
  *************************/
  const allPawns = wht_pawns.concat(blk_pawns);
  for (let p = 0; p < allPawns.length; p++) {
    allPawns[p].firstChild.classList.add("pawn");
  }

  /************************ 
   CREATE BUTTONS INSIDE ALL OTHER PIECES
  *************************/

  for (let x = 0; x < 2; x++) {
    blk_rooks[x].appendChild(document.createElement("button"));
    wht_rooks[x].appendChild(document.createElement("button"));

    blk_knights[x].appendChild(document.createElement("button"));
    wht_knights[x].appendChild(document.createElement("button"));

    blk_bishops[x].appendChild(document.createElement("button"));
    wht_bishops[x].appendChild(document.createElement("button"));

    blk_rooks[x].firstChild.innerHTML = chess[4].codeblk;
    wht_rooks[x].firstChild.innerHTML = chess[4].codewht;

    blk_knights[x].firstChild.innerHTML = chess[1].codeblk;
    wht_knights[x].firstChild.innerHTML = chess[1].codewht;

    blk_bishops[x].firstChild.innerHTML = chess[3].codewht;
    wht_bishops[x].firstChild.innerHTML = chess[3].codeblk;
  }

  /************************ 
   ADD CLASSES TO ALL
   ROOKS, KNIGHTS AND BISHOPS
  *************************/
  const allRooks = wht_rooks.concat(blk_rooks);
  const allKnights = wht_knights.concat(blk_knights);
  const allBishops = wht_bishops.concat(blk_bishops);
  for (let a = 0; a < allRooks.length; a++) {
    allRooks[a].firstChild.classList.add("rook");
    allKnights[a].firstChild.classList.add("knight");
    allBishops[a].firstChild.classList.add("bishop");
  }

  /************************ 
   PLACE AND CREATE BUTTONS INSIDE QUEENS AND KINGS
  *************************/
  const blk_queen = document.querySelector(".grid__item:nth-of-type(4)");
  blk_queen.appendChild(document.createElement("button"));
  blk_queen.firstChild.innerHTML = chess[5].codeblk;

  const wht_queen = document.querySelector(".grid__item:nth-of-type(60)");
  wht_queen.appendChild(document.createElement("button"));
  wht_queen.firstChild.innerHTML = chess[5].codewht;

  const blk_king = document.querySelector(".grid__item:nth-of-type(5)");
  blk_king.appendChild(document.createElement("button"));
  blk_king.firstChild.innerHTML = chess[0].codeblk;

  const wht_king = document.querySelector(".grid__item:nth-of-type(61)");
  wht_king.appendChild(document.createElement("button"));
  wht_king.firstChild.innerHTML = chess[0].codewht;

  /************************ 
  ADD CLASSES QUEENS AND KINGS
  *************************/
  const allQueens = [blk_queen, wht_queen];
  const allKings = [blk_king, wht_king];
  for (let s = 0; s < allQueens.length; s++) {
    allQueens[s].firstChild.classList.add("queen");
    allKings[s].firstChild.classList.add("king");
  }

  const allPieces = document.querySelectorAll("button");
  for (let y = 0; y < allPieces.length; y++) {
    allPieces[y].addEventListener("click", function () {
      showInfo(chess);
    });
  }
  console.log(allPieces);
}

function showInfo(piece) {
  if (
    document.querySelector(".queen").innerHTML === "♚" ||
    document.querySelector(".queen").innerHTML === "♚"
  ) {
    console.log("YESSSSSS");
    // document.querySelector(".info_name").textContent = piece[0].name;
    // document.querySelector(
    //   ".info_value"
    // ).textContent = `Value: ${piece[0].value}`;
    // console.log(document.getElementsByClassName("queen"));
  } else console.log(document.querySelector(".queen").innerHTML);
}

// document.querySelector(".blk_rook").addEventListener("click", function () {
//   showInfo(chess);
// });
