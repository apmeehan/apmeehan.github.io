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
  { col: 2, row: 1 },
  { col: 6, row: 3 },
  { col: 3, row: 7 },
];

for (let row = 0; row < GRID_ROW_COUNT; row += 1) {
  const divRow = document.createElement("div");
  divRow.className = "grid-row";

  newLinksInnerContainer.appendChild(divRow);

  for (let col = 0; col < GRID_COLUMN_COUNT; col += 1) {
    const divCell = document.createElement("div");
    divCell.className = "grid-cell";
    divRow.appendChild(divCell);

    const linkIndex = linkPositions.findIndex((p) => p.row === row && p.col === col);

    if (linkIndex > -1) {
      const link = linksList.children[linkIndex].querySelector("a");
      link.textContent = '';

      divCell.appendChild(link);
    }
  }
}

linksList.replaceWith(newLinksContainer);

// Add link to design source
document.querySelector("footer").appendChild(Object.assign(document.createElement("a"), { textContent: "Design source", href: "https://www.udiscovermusic.com/stories/omd-orchestral-manoeuvres-in-the-dark-debut-album" }))