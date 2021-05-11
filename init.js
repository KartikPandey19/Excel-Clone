// initially grid building 
let colums = 26;
let rows = 100;

let topRow = document.querySelector(".top-row");
let leftcol =document.querySelector(".left-col");
for(let i= 0;i< colums;i++){
     let div = document.createElement("div")
     div.innerText = String.fromCharCode(65 + i);
     div.setAttribute("class", "cell");
     topRow.appendChild(div);
}
for(let i= 1;i<=rows;i++){
     let div = document.createElement("div")
     div.innerText = i;
     div.setAttribute("class","cell");
     leftCol.appendChild(div); 
} 