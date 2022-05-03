let addbtn=document.querySelector(".add-sheets");
let sheetlist=document.querySelector(".sheets-list");
let sheetid=0;

//To add new sheets
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
    initUI();
    initDb();
})

//To change the active of sheet
sheetlist.addEventListener("click",function(e){
    let sheetclicked=e.target;
    if(sheetclicked.classList.contains("active-sheet")){
        return;
    }
    let previousactivesheet=document.querySelector(".active-sheet");
    previousactivesheet.classList.remove("active-sheet");
    initUI();
    sheetclicked.classList.add("active-sheet");
    let sheetid=sheetclicked.getAttribute("sheetid");
    db=sheetsdb[sheetid].db;
   visitedcell=sheetsdb[sheetid].visitedcell;
    setUI();
})

function initUI(){
    for(let i=0;i<100;i++){
        for(let j=0;j<26;j++){
            let cell=document.querySelector(`div[rowid="${i}"][colid="${j}"]`);
            cell.textContent="";
        }
    }
}

function setUI(){
   for(let i=0;i<visitedcell.length;i++){
       let {rowid,colid}=visitedcell[i];
       let cellobj=db[rowid][colid];
       let cell=document.querySelector(`div[rowid="${rowid}"][colid="${colid}"]`);
       cell.textContent=cellobj.value;       
   }
}

