// @ts-nocheck

/** Generate responsive 9x9 links grid */

const GRID_ROW_COUNT = 9;
const GRID_COLUMN_COUNT = 9;

const linksList = document.querySelector("#links");

const newLinksInnerContainer = document.createElement("div");
newLinksInnerContainer.className = "grid";

const newLinksContainer = document.createElement("div");
newLinksContainer.id = "links-grid-container";
newLinksContainer.appendChild(newLinksInnerContainer);

const linkPositions = [
  [3, 2],
  [7, 4],
  [4, 8],
];

for (let row = 1; row <= GRID_ROW_COUNT; row += 1) {
  const divRow = document.createElement("div");
  divRow.className = "grid-row";

  newLinksInnerContainer.appendChild(divRow);

  for (let col = 1; col <= GRID_COLUMN_COUNT; col += 1) {
    const divCell = document.createElement("div");
    divCell.className = "grid-cell";
    divRow.appendChild(divCell);

    const linkIndex = linkPositions.findIndex(([i, j]) => j === row && i === col);
    
    if (linkIndex !== -1 && linkIndex < linksList.children.length) {
      const linkElement = linksList.children[linkIndex];
      if (linkElement) {
        const link = linkElement.querySelector("a");
        if (link) {
          link.textContent = '';
          divCell.appendChild(link);
        }
      }
    }
  }
}

linksList.replaceWith(newLinksContainer);