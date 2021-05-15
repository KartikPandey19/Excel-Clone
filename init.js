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
for (let i = 0; i < rows; i++) {
     let row = document.createElement("div");
     row.setAttribute("class", "row");
     for (let j = 0; j < columns; j++) {
          let col = document.createElement("div")
          col.setAttribute("class", "cell");
          col.setAttribute("rid",i);
          col.setAttribute("cid",j);
          row.appendChild(col );
     }
     grid.appendChild(row);
}
let Allcells = document.querySelectorAll(".grid .cell");
let addressElement = document.querySelector(".address");
for(let i=0;i<Allcells.length;i++){
Allcells[i].addEventListener("click",function(){
     let cid = Allcells[i].getAttribute("cid");
     let rid = Allcells[i].getAttribute("rid");
     cid = Number(cid);
     rid = Number(rid); 
     addressElement.value = `${String.fromCharCode(65+cid)} ${rid+1}`
})    
}