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
