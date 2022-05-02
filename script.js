let topleftcell=document.querySelector(".top-left-cell");
let toprow=document.querySelector(".top-row");
let leftcol=document.querySelector(".left-col");
cellscontdiv.addEventListener("scroll",function(e){
    let top=e.target.scrollTop;
    let left=e.target.scrollLeft;
    topleftcell.style.top=top+"px";
    topleftcell.style.left=left+"px";
    toprow.style.top=top+"px";
    leftcol.style.left=left+"px";
})

let allcells=document.querySelectorAll(".cell");
let address=document.querySelector("#address");

for(let i=0;i<allcells.length;i++){
  allcells[i].addEventListener("click",function(e){
    let rowid=Number(e.target.getAttribute('rowid'));
    let colid=Number(e.target.getAttribute('colid'));
     //console.log(rowid+" "+colid);
    //  fromCharCode convert the value to alpha values
     let addresscont=String.fromCharCode(65+colid)+(rowid+1)+"";
    //  .value sets the vlue to the specific textbox
     address.value=addresscont;
  })

  //update Db with respect to UI,blur is the listner it will work when the focus is on the other cell
  allcells[i].addEventListener("blur",function(e){
    let cellvalue=e.target.textContent;
    let rowid=e.target.getAttribute('rowid');
    let colid=e.target.getAttribute('colid');
    let cellobj=db[rowid][colid];
    if(cellobj==cellvalue){
      return;
    }
    cellobj.value=cellvalue;
   // console.log(cellvalue);
    

  })
}
