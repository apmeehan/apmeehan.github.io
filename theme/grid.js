/** Generate a responsive 9x9 grid for displaying the nav links.
 * 
 * The grid is made up of a series of rows, each of which contains several "cells".
 * Every grid cell without a nav link at this position is an empty <div class="cell">.
 * 
 * If there is a link at this cell's position, convert it from:
 *   <a href="…">GitHub</a>
 * to:
 *   <a href="…" title="GitHub"></a>
 * 
 * Then put it in the cell, so we end up with:
 *   <div class="grid">
 *     <div class="row">
 *       <div class="cell"></div>
 *       <div class="cell"></div>
 *       <div class="cell"><a href="…" title="GitHub"></a></div>
 *       ...
 *     </div>
 *     <div class="row">...</div>
 *     <div class="row">...</div>
 *     ...
 *   </div>
 */

const NUMBER_OF_ROWS = 9;
const NUMBER_OF_COLUMNS = 9;

const linksList = document.querySelector("#links");

const gridInnerContainer = document.createElement("div");
gridInnerContainer.className = "grid";

const grid = document.createElement("div");
grid.id = "grid-container";
grid.appendChild(gridInnerContainer);

// For each link, represent its position in the grid as coordinates [x,y]
const linkPositions = [
  [3, 2],
  [7, 4],
  [4, 8],
];

for (let currentRow = 1; currentRow <= NUMBER_OF_ROWS; currentRow += 1) {
  const row = document.createElement("div");
  row.className = "row";

  gridInnerContainer.appendChild(row);

  for (let currentCol = 1; currentCol <= NUMBER_OF_COLUMNS; currentCol += 1) {
    const cell = document.createElement("div");
    cell.className = "cell";
    row.appendChild(cell);

    const linkIndex = linkPositions.findIndex(([x, y]) => x === currentCol && y === currentRow);
    
    if (linkIndex !== -1 && linkIndex < linksList.children.length) {
      const listItem = linksList.children[linkIndex];
      if (listItem) {
        const link = listItem.querySelector("a");
        if (link) {
          link.title = link.textContent;
          link.textContent = '';
          cell.appendChild(link);
        }
      }
    }
  }
}

linksList.replaceWith(grid);