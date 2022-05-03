function getrowIdcolIdFromElement(element){
    let rowid=element.getAttribute("rowid");
    let colid=element.getAttribute("colid");
    return{
        rowid,colid
    }
}
function formulafinder(formula,childcell){
    //let formula=D4 * B8
    let formulacomps=formula.split(" ");
    //formulacomps=[D4,*,D8];
    for(let i=0;i<formulacomps.length;i++){
        let formulacomp=formulacomps[i];
        if(formulacomp[0]>='A' && formulacomp[0]<='Z'){
        let {rowid,colid}=getrowIdcolIdFromAddress(formulacomp);
        let cellobj=db[rowid][colid];
        let value=cellobj.value;
        if(childcell){
            cellobj.children.push(childcell.name);
            //console.log(cellobj);
        }
        //replace function 
        formula=formula.replace(formulacomp,value);
        }
    }
    //similar to infix evaluation
    return eval(formula);

}
function getrowIdcolIdFromAddress(address){
    let rowid=Number(address.substring(1))-1;
    // chaeCodeAt give ascii values of the character
    let colid=address.charCodeAt(0)-65;
    return {
        rowid,colid
    }
}

function updatechildren(cellobj){
    for(let i=0;i<cellobj.children.length;i++){
        let cellobjchild=cellobj.children[i];
        let {rowid,colid}=getrowIdcolIdFromAddress(cellobjchild);
        let child=db[rowid][colid]
        //console.log(childformula);
        let newvalue=formulafinder(child.formula);
        db[rowid][colid].value=newvalue;
        let UIvalue=document.querySelector(`div[rowid="${rowid}"][colid='${colid}']`);
        UIvalue.textContent=newvalue;
        updatechildren(child);
    }
}