// initially grid building 
let columns = 26;
let rows = 100;

let topRow = document.querySelector(".top-row");
let leftcol = document.querySelector(".left-col");
let grid = document.querySelector(".grid");
for (let i = 0; i < columns; i++) {
     let div = document.createElement("div")
     div.innerText = String.fromCharCode(65 + i);
     div.setAttribute("class", "cell");
     topRow.appendChild(div);
}
for (let i = 1; i <= rows; i++) {
     let div = document.createElement("div")
     div.innerText = i;
     div.setAttribute("class", "block");
     leftcol.appendChild(div);
}
let sheetArr=[];

for (let i = 0; i < rows; i++) {
     let row = document.createElement("div");
     let rowArr = [];
     row.setAttribute("class", "row");
     for (let j = 0; j < columns; j++) {
          // UI
          let cell = document.createElement("div")
          cell.setAttribute("class", "cell");
          cell.setAttribute("rid",i);
          cell.setAttribute("cid",j);
          cell.setAttribute("contenteditable","true");
          row.appendChild(cell);
          let cellObj={
               isBold:false,
               isItalic:false,
               isUnderline:false,
               fontfamily:"sans-serif",
               fontSize:16,
               color:"black",
               bgColor:""
          }
          rowArr.push(cellObj);
     }
     grid.appendChild(row);
     sheetArr.push(rowArr);
}
