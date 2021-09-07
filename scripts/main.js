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
    // We have the data
    // console.log(data);
    handleData(data);
  })
  .catch((e) => {
    // Whoops, something went wrong
    console.error("An error occurred:", e.message);
  });

function handleData(chess) {
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);

  const blk_pawns = clone.querySelectorAll(".blk_pawn");
  const blk_rooks = clone.querySelectorAll(".blk_rook");
  const blk_knights = clone.querySelectorAll(".blk_knight");
  const blk_bishops = clone.querySelectorAll(".blk_bishop");

  const wht_pawns = clone.querySelectorAll(".wht_pawn");
  const wht_rooks = clone.querySelectorAll(".wht_rook");
  const wht_knights = clone.querySelectorAll(".wht_knight");
  const wht_bishops = clone.querySelectorAll(".wht_bishop");

  for (let i = 0; i < blk_pawns.length; i++) {
    blk_pawns[i].innerHTML = chess[2].codeblk;
    wht_pawns[i].innerHTML = chess[2].codewht;

    blk_pawns[i].setAttribute("href", "details.html?_id=" + chess[2]._id);
    wht_pawns[i].setAttribute("href", "details.html?_id=" + chess[2]._id);
  }

  for (let x = 0; x < 2; x++) {
    blk_rooks[x].innerHTML = chess[4].codeblk;
    blk_knights[x].innerHTML = chess[1].codeblk;
    blk_bishops[x].innerHTML = chess[3].codeblk;
    wht_rooks[x].innerHTML = chess[4].codewht;
    wht_knights[x].innerHTML = chess[1].codewht;
    wht_bishops[x].innerHTML = chess[3].codewht;

    blk_rooks[x].setAttribute("href", "details.html?_id=" + chess[4]._id);
    blk_knights[x].setAttribute("href", "details.html?_id=" + chess[1]._id);
    blk_bishops[x].setAttribute("href", "details.html?_id=" + chess[3]._id);
    wht_rooks[x].setAttribute("href", "details.html?_id=" + chess[4]._id);
    wht_knights[x].setAttribute("href", "details.html?_id=" + chess[1]._id);
    wht_bishops[x].setAttribute("href", "details.html?_id=" + chess[3]._id);
  }

  clone.querySelector(".blk_queen").innerHTML = chess[0].codeblk;
  clone.querySelector(".blk_king").innerHTML = chess[5].codeblk;
  clone
    .querySelector(".blk_queen")
    .setAttribute("href", "details.html?_id=" + chess[0]._id);
  clone
    .querySelector(".blk_king")
    .setAttribute("href", "details.html?_id=" + chess[5]._id);

  clone.querySelector(".wht_queen").innerHTML = chess[0].codewht;
  clone.querySelector(".wht_king").innerHTML = chess[5].codewht;
  clone
    .querySelector(".wht_queen")
    .setAttribute("href", "details.html?_id=" + chess[0]._id);
  clone
    .querySelector(".wht_king")
    .setAttribute("href", "details.html?_id=" + chess[5]._id);

  document.querySelector(".grid").appendChild(clone);
}
