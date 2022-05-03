let addbtn=document.querySelector(".add-sheets");
let sheetlist=document.querySelector(".sheets-list");
let sheetid=0;

addbtn.addEventListener("click",function(){
    sheetid++;
    let activesheet=document.querySelector(".active-sheet");
    activesheet.classList.remove("active-sheet");
    let sheet=document.createElement("div");
    sheet.classList.add("sheet");
    sheet.classList.add("active-sheet");
    sheet.setAttribute("sheetid",`${sheetid}`);
    sheet.innerText=`Sheet${sheetid+1}`;
    sheetlist.append(sheet);
})

sheetlist.addEventListener("click",function(e){
    let sheetclicked=e.target;
    if(sheetclicked.classList.contains("active-sheet")){
        return;
    }
    let previousactivesheet=document.querySelector(".active-sheet");
    previousactivesheet.classList.remove("active-sheet");
    sheetclicked.classList.add("active-sheet");

})

