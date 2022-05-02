let cellscontdiv=document.querySelector(".cells-cont");
function initcells(){
  let cellscont="";

//Top left cell
cellscont+="<div class='top-left-cell'></div>"
//Top row
cellscont+="<div class='top-row'>"
for(let i=0;i<26;i++){
  cellscont+=`<div class='top-row-cell'>${String.fromCharCode(65+i)}</div>`
}
cellscont+="</div>"

cellscont+="<div class='left-col'>"
for(let i=0;i<100;i++){
  cellscont+=`<div class='left-col-cell'>${i+1}</div>`
}
cellscont+="</div>"

//cells content
cellscont+="<div class='cells'>"
  for(let i=0;i<100;i++){
      cellscont+='<div class="row">'
      for(let j=0;j<26 ;j++){
          cellscont+='<div class="cell" contentEditable="true"></div>'
      }
      cellscont+='</div>'
  }
  cellscont+='</div>'
  cellscontdiv.innerHTML=cellscont;
}
initcells();
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
