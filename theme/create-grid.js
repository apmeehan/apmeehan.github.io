/** Generate a responsive 9x9 grid of divs for displaying the nav links at specific positions. */

const NUMBER_OF_ROWS = 9;
const NUMBER_OF_COLUMNS = 9;

const LINK_POSITIONS = [
  [2, 1], // GitHub
  [6, 3], // LinkedIn
  [3, 6], // Instagram
];

function createGrid() {
  const gridContainer = document.createElement("div");
  gridContainer.id = "grid-container";

  const grid = document.createElement("div");
  grid.className = "grid";
  gridContainer.appendChild(grid);

  // Create a matrix so each div can be easily referenced by its row and column position
  const cellsMatrix = Array(NUMBER_OF_ROWS)
    .fill()
    .map(() => Array(NUMBER_OF_COLUMNS).fill(null));

  const linksList = document.querySelector("#links");
  const links = linksList.querySelectorAll("a");

  for (let currentRow = 0; currentRow < NUMBER_OF_ROWS; currentRow += 1) {
    const row = document.createElement("div");
    row.className = "row";
    grid.appendChild(row);

    for (let currentCol = 0; currentCol < NUMBER_OF_COLUMNS; currentCol += 1) {
      const cell = document.createElement("div");
      cell.className = "cell";
      row.appendChild(cell);

      // Store reference to this div in matrix
      cellsMatrix[currentRow][currentCol] = cell;

      // Check if this cell should contain a link, and which link it should be
      const linkIndex = LINK_POSITIONS.findIndex(
        ([x, y]) => x === currentCol && y === currentRow
      );

      if (linkIndex !== -1 && linkIndex < linksList.children.length) {
        const link = links[linkIndex];
        const linkText = link.textContent;
        const span = document.createElement("span"); // Wrap the link text in a span so its position can be adjusted
        span.textContent = linkText;
        link.textContent = "";
        link.appendChild(span);
        cell.appendChild(link);
      }
    }
  }

  // To enable the animations, add hover event listeners to the cells with links
  for (const [col, row] of LINK_POSITIONS) {
    const cellWithLink = cellsMatrix[row][col];

    // const cellsBelow = [
    //   cellsMatrix[row + 1][col - 1],
    //   cellsMatrix[row + 1][col],
    //   cellsMatrix[row + 1][col + 1],
    // ];
    const borderingCells = [
      cellsMatrix[row - 1][col + 0],
      cellsMatrix[row - 1][col + 1],
      cellsMatrix[row + 0][col + 1],
      cellsMatrix[row + 1][col + 1],
      cellsMatrix[row + 1][col + 0],
      cellsMatrix[row + 1][col - 1],
      cellsMatrix[row + 0][col - 1],
      cellsMatrix[row - 1][col - 1],
    ];

    cellWithLink.addEventListener("mouseenter", () => {
      // cellsMatrix[row - 1][col + 0].classList.add("rotate-n");
      // cellsMatrix[row - 1][col + 1].classList.add("rotate-ne");
      // cellsMatrix[row + 0][col + 1].classList.add("rotate-e");
      // cellsMatrix[row + 1][col + 1].classList.add("rotate-se");
      cellsMatrix[row + 1][col + 0].classList.add("rotate-s");
      // cellsMatrix[row + 1][col - 1].classList.add("rotate-sw");
      // cellsMatrix[row + 0][col - 1].classList.add("rotate-w");
      // cellsMatrix[row - 1][col - 1].classList.add("rotate-nw");
    });
    cellWithLink.addEventListener("mouseleave", () => {
      for (const cell of borderingCells) {
        cell.className = "cell";
      }
    });
  }

  linksList.replaceWith(gridContainer);
}

createGrid();
