let topleftcell=document.querySelector(".top-left-cell");
let toprow=document.querySelector(".top-row");
let leftcol=document.querySelector(".left-col");
let leftcolcells=document.querySelectorAll(".left-col-cell");
let toprowcells=document.querySelectorAll(".top-row-cell");
let lastselectedcell;
let lasttopcell;
let lastleftcell;
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
let formulaInput=document.querySelector("#formula");

for(let i=0;i<allcells.length;i++){
  allcells[i].addEventListener("click",function(e){
    let rowid=Number(e.target.getAttribute('rowid'));
    let colid=Number(e.target.getAttribute('colid'));
    let cellobj=db[rowid][colid];
     //console.log(rowid+" "+colid);
    //  fromCharCode convert the value to alpha values
     let addresscont=String.fromCharCode(65+colid)+(rowid+1)+"";
    //  .value sets the vlue to the specific textbox
     address.value=addresscont;
     //update formula to Ui frrom Db
     formulaInput.value=cellobj.formula;

     if(lastselectedcell){
    lastselectedcell.style.border="0.1px solid #EFF0EF";
    leftcolcells[lastleftcell].style.border="0.1px solid #EFF0EF";
    toprowcells[lasttopcell].style.border="0.1px solid #EFF0EF";
    lastselectedcell.style.borderRight="none";
    lastselectedcell.style.borderTop="none";
     }

    if(rowid==0 && colid==0){
      allcells[i].style.borderRight="#4CAF50 solid 1px";
      allcells[i].style.borderBottom="#4CAF50 solid 1px";
    }

    else if(rowid==0){
      allcells[i].style.borderRight="#4CAF50 solid 1px";
      allcells[i].style.borderBottom="#4CAF50 solid 1px";
      allcells[i].style.borderLeft="#4CAF50 solid 1px";
    }
    else if(colid==0){
      allcells[i].style.borderRight="#4CAF50 solid 1px";
      allcells[i].style.borderBottom="#4CAF50 solid 1px";
      allcells[i].style.borderTop="#4CAF50 solid 1px";
    }
    else{
      allcells[i].style.border="#4CAF50 solid 1px";
    }  
    leftcolcells[rowid].style.border="#4CAF50 solid 1px";
    toprowcells[colid].style.border="#4CAF50 solid 1px";  
     cellobj.fontstyle.bold?
     document.querySelector(".bold").classList.add("font-style-active"):
     document.querySelector(".bold").classList.remove("font-style-active");

     
     cellobj.fontstyle.italic?
     document.querySelector(".italic").classList.add("font-style-active"):
     document.querySelector(".italic").classList.remove("font-style-active");

     
     cellobj.fontstyle.underline?
     document.querySelector(".underline").classList.add("font-style-active"):
     document.querySelector(".underline").classList.remove("font-style-active");

     cellobj.alignstyle.left?
     document.querySelector(".left").classList.add("font-style-active"):
     document.querySelector(".left").classList.remove("font-style-active");

     cellobj.alignstyle.right?
     document.querySelector(".right").classList.add("font-style-active"):
     document.querySelector(".right").classList.remove("font-style-active");

     cellobj.alignstyle.center?
     document.querySelector(".center").classList.add("font-style-active"):
     document.querySelector(".center").classList.remove("font-style-active");
     
     
  })

  //update Db with respect to UI,blur is the listner it will work when the focus is on the other cell
  allcells[i].addEventListener("blur",function(e){
    
    lastselectedcell=e.target;
    let cellvalue=e.target.textContent;
    let rowid=e.target.getAttribute('rowid');
    let colid=e.target.getAttribute('colid');
    lastleftcell=rowid;
    lasttopcell=colid;
    let cellobj=db[rowid][colid];
    
    if(cellobj.value==cellvalue){
      return;
    }
    cellobj.value=cellvalue;
    cellobj.formula=formulaInput.value;
    //To update the children if we change the parent's value
    updatechildren(cellobj);
   // console.log(cellvalue);
   if(cellobj.visited){
     return;
   }
   cellobj.visited=true;
   visitedcell.push({rowid:rowid,colid:colid})

    

  })

  allcells[i].addEventListener("keydown",function(e){
      if(e.key=='Backspace'){
        let {rowid,colid}=getrowIdcolIdFromElement(e.target);
        let cellobj=db[rowid][colid];
        cellobj.formula="";
        e.target.textContent="";
        formulaInput.value='';
        //It will remove the children from the parents and delete the parents in the specific cell
        removeformula(cellobj);
      }
  })
}

formulaInput.addEventListener("blur",function(e){
  let formula=e.target.value;
  if(formula){
    let{rowid,colid}=getrowIdcolIdFromElement(lastselectedcell);
    let cellobj=db[rowid][colid];
   //Intially checking that the cellobj contains formula previosly or not
   //If it contains previosly we r updating it with nwew one so we are first deleting the parent and child 
   //of the specifc cell object
    if(cellobj.formula){
      removeformula(cellobj);
    }
    //Formual finder will add child and parent and find the value corress to the formual that we r givig
    let cellvalue=formulafinder(formula,cellobj);
    //update formula to DB from UI
    lastselectedcell.textContent=cellvalue;
    cellobj.formula=formula;
    cellobj.value=cellvalue;
    //if formula is updated then coresponding chidren values also need to updated
    updatechildren(cellobj);
  }
})
