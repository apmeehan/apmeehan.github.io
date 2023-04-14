const GRID_ROW_COUNT = 9;
const GRID_COLUMN_COUNT = 9;

/*~~~~~ Generate responsive 9x9 links grid ~~~~~*/

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
      divCell.classList.add("grid-cell--hasLink");

      const link = linksList.children[linkIndex].querySelector("a");
      link.textContent = '';

      divCell.appendChild(link);
    }
  }
}

linksList.replaceWith(newLinksContainer);

/*~~~~~ Wrap my name and title in a container element, for styled layout ~~~~~*/

const myName = document.querySelector("#my-name");
const myTitle = document.querySelector("#my-title");

const headings = document.createElement("div");
headings.id = "headings";

myName.parentNode.insertBefore(headings, myName);
headings.append(myName, myTitle);
