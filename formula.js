for (let i = 0; i < Allcells.length; i++) {
    Allcells[i].addEventListener("blur",function(){
        let {rid,cid} = getRIdIdfromAddress();
        let cellObj = sheetArr[rid][cid];
        cellObj.value = Allcells[i].innerText;
        cellObj.value = Allcells[i].innerText;
        cellObj.value = Allcells[i].innerText;

    })
    }
  let formulabar = document.queryselector(".formula");
  formulabar.addEventListener("keydown",function(e){
      if(e.key =="Enter" && formulabar.value !=""){

      }
  })