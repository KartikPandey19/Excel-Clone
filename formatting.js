let bold = document.querySelector(".fa-bold");
bold.addEventListener("click", function () {

    let uiCell = getcell();
    let { rid, cid } = getRIdIdfromAddress();
    let cellObj =  sheetArr[rid][cid];
    if(cellObj.isBold==true){
        uiCell.style.fontWeight = "normal";
        bold.classList.remove("menu-active");
        cellObj.isBold = false
    }else{
        uiCell.style.fontWeight = "bold"
        bold.classList.add("menu-active");
        cellObj.isBold = true;
    }
})
function getcell() {
    let address = addressElement.value;
    let { rid, cid } = getRIdIdfromAddress(address);
    return document.querySelector(`.grid .cell[rid="${rid}"][cid="${cid}"]`)
}
function getRIdIdfromAddress() {
    let address = addressElement.value;
    let cid = Number(address.charCodeAt(0)) - 65;
    let rid = Number(address.slice(1)) - 1;
    return { cid, rid };
}
let Allcells = document.querySelectorAll(".grid .cell");
let addressElement = document.querySelector(".address");
for(let i=0;i<Allcells.length;i++){
Allcells[i].addEventListener("click",function(){
     let cid = Allcells[i].getAttribute("cid");
     let rid = Allcells[i].getAttribute("rid");
     cid = Number(cid);
     rid = Number(rid);  
     addressElement.value=`${String.fromCharCode(65+cid)}${rid+1}`
  let cellObj= sheetArr[rid][cid];
  if(cellObj.isBold==true){
    bold.classList.add("menu-active");
  }else{
    bold.classList.remove("menu-active");
  }
})    
}
Allcells[0].click();