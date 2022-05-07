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
          cellscont+=`<div class="cell"  colid="${j}" rowid="${i}" contentEditable="true"></div>`
      }
      cellscont+='</div>'
  }
  cellscont+='</div>'
  cellscontdiv.innerHTML=cellscont;
}
initcells();
let db;
let sheetsdb=[];
let visitedcell;
initDb();
function initDb(){
  let newsheet=[];
  for(let i=0;i<100;i++){
    let row=[];
    for(let j=0;j<26;j++){
      let name=String.fromCharCode(65+j)+(i+1)+"";
      let cellobj={
        name:name,
        value:"",
        formula:"",
        children:[],
        parent:[],
        visited:false,
        fontstyle:{bold:false,italic:false,underline:false},
        alignstyle:{left:false,center:false,right:false}
      }
      row.push(cellobj);
    }
    newsheet.push(row);
  }
  db=newsheet;
  visitedcell=[];
  sheetsdb.push({db:newsheet,visitedcell:visitedcell})
}

