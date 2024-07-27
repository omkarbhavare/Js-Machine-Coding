document.addEventListener("DOMContentLoaded", function () {
  let table = document.getElementById("table");

  // Create the chessboard
  for (let i = 0; i < 8; i++) {
    let tr = document.createElement("tr");
    let white = i % 2 == 0 ? true : false;
    for (let j = 0; j < 8; j++) {
      let td = document.createElement("td");
      td.dataset.row = i;
      td.dataset.col = j;

      if (white) {
        td.setAttribute("class", "box white");
      } else {
        td.setAttribute("class", "box black");
      }
      // td.classList.add("box");

      white = !white;
      td.addEventListener("click", handleCellClick);
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }

  let selectedCell = null;

  function handleCellClick(event) {
    let cell = event.target;
    // console.log(`selectedCell ${selectedCell.dataset.row}`);
    console.dir(cell);

    if (selectedCell) {
      clearHighlights();
      if (cell === selectedCell) {
        selectedCell = null;
        return;
      }
    }

    selectedCell = cell;
    cell.classList.add("blue");

    highlightMoves(cell);
  }

  function highlightMoves(cell) {
    let row = parseInt(cell.dataset.row);
    let col = parseInt(cell.dataset.col);

    console.log("row " + row);
    console.log("col " + col);

    let directions = [
      [-1, -1], // top-left
      [-1, 1], // top-right
      [1, -1], // bottom-left
      [1, 1], // bottom-right
    ];

    directions.forEach(([rowOffset, colOffset]) => {
      let r = row + rowOffset;
      let c = col + colOffset;
      while (r >= 0 && r < 8 && c >= 0 && c < 8) {
        console.log("row " + r + "col " + c);
        console.log();
        let targetCell = document.querySelector(
          `[data-row="${r}"][data-col="${c}"]`
        );
        targetCell.classList.add("highlight");
        r += rowOffset;
        c += colOffset;
      }
    });
  }

  function clearHighlights() {
    document.querySelectorAll(".highlight, .blue").forEach((cell) => {
      cell.classList.remove("highlight", "blue");
    });
  }
});
