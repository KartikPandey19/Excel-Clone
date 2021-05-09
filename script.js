let iconcontainer = document.querySelector(".icon-container");
let sheetList = document.querySelector(".sheet-list");
let firstSheet = document.querySelector(".sheet");
firstSheet.addEventListener("click",handleClick);
iconcontainer.addEventListener("click",function(){
    // create new list
    let newSheet = document.createElement("div");
    // created element
    let allSheets = document.querySelectorAll(".sheet")
    let lastSheet = allSheets[allSheets.length-1];
    let idx = lastSheet.getAttribute("idx");
    newSheet.setAttribute("idx", Number(idx) + 1);
    // newSheet.setAttribute("idx", `${Number(idx)+1}`);
    // text set
    newSheet.innerText = `Sheet- $(Number(idx) + 2}`;
    // set class
    newSheet.setAttribute("class","sheet");
    // append
   sheetList.appendChild(newSheet);
// check all sheet
    allSheets=document.querySelectorAll(".sheet");
    setLastActive(allSheets);
    // future click handle click
    newSheet.addEventListener("click",handleClick)
})
function setLastActive(allSheets){
    for(let i=0;i<allSheets.length;i++){
        allSheets[i].classList.remove("active");
    }
    allSheets[allSheets.length-1].classList.add("active");
}

function handleClick(e){
    let sheet = e.currentTarget;
    let allSheets = document.querySelectorAll(".sheet");
    for(let i=0;i<allSheets.length;i++){
        allSheets[i].classList.remove("active");
    }
    sheet.classList.add("active");
}