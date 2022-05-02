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
     console.log(rowid+" "+colid);
     let addresscont=String.fromCharCode(65+colid)+(rowid+1)+"";
     address.value=addresscont;
  })
}
