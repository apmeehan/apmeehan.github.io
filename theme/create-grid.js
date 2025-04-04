/** Generate a responsive 9x9 grid of divs for displaying the nav links at specific positions. */

const NUMBER_OF_ROWS = 9;
const NUMBER_OF_COLUMNS = 9;

const LINK_POSITIONS = [
  { id: "about", position: [1, 1] },
  { id: "projects", position: [4, 1] },
  { id: "socials", position: [7, 1] },
];
// const LINK_POSITIONS = [
//   { id: "about", position: [0, 1] },
//   { id: "skills", position: [2, 1] },
//   { id: "projects", position: [4, 1] },
//   { id: "employment", position: [6, 1] },
//   { id: "socials", position: [8, 1] },
// ];

function createGrid() {
  const gridContainer = document.createElement("div");
  gridContainer.className = "grid-container";

  const grid = document.createElement("div");
  grid.className = "grid";
  gridContainer.appendChild(grid);

  // Create a matrix so each div can be easily referenced by its row and column position
  const cellsMatrix = Array(NUMBER_OF_ROWS)
    .fill()
    .map(() => Array(NUMBER_OF_COLUMNS).fill(null));

  const linksList = document.querySelector(".links");
  const links = linksList.querySelectorAll("a");
  const pageTitle = document.querySelector(".page-title");

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

      // Uncomment to see cell coordinates (useful when testing)
      // cell.textContent = `${currentCol},${currentRow}`;

      // Check if this cell should contain a link, and which link it should be
      const linkIndex = LINK_POSITIONS.findIndex(
        ({ position: [x, y] }) => x === currentCol && y === currentRow
      );

      // Add the link to the grid, with a hover listener to update the subtitle
      let currentLink;
      if (linkIndex !== -1 && linkIndex < linksList.children.length) {
        currentLink = LINK_POSITIONS[linkIndex];
        const link = links[linkIndex];
        link.textContent = "";
        cell.appendChild(link);

        const defaultPageTitle = pageTitle.querySelector(".default");
        const newPageTitle = pageTitle.querySelector(`.${currentLink.id}`);

        cell.addEventListener("mouseenter", () => {
          defaultPageTitle.classList.add("hidden");
          defaultPageTitle.setAttribute("aria-hidden", "true");
          newPageTitle.classList.remove("hidden");
          newPageTitle.removeAttribute("aria-hidden");
        });
        cell.addEventListener("mouseleave", () => {
          defaultPageTitle.classList.remove("hidden");
          defaultPageTitle.removeAttribute("aria-hidden");
          newPageTitle.classList.add("hidden");
          newPageTitle.setAttribute("aria-hidden", "true");
        });
      }
    }
  }

  linksList.replaceWith(gridContainer);
}

createGrid();
