function getrowIdcolId(element){
    let rowid=element.getAttribute("rowid");
    let colid=element.getAttribute("colid");
    return{
        rowid,colid
    }
}
function formulafinder(formula){
    //let formula=D4 * B8
    let formulacomps=formula.split(" ");
    //formulacomps=[D4,*,D8];
    for(let i=0;i<formulacomps.length;i++){
        let formulacomp=formulacomps[i];
        if(formulacomp[0]>='A' && formulacomp[0]<='Z'){
        let {rowid,colid}=getrowIdcolIdFromAddress(formulacomp);
        let cellobj=db[rowid][colid];
        let value=cellobj.value;
        //replace function 
        formula=formula.replace(formulacomp,value);
        }
    }
    //similar to infix evaluation
    return eval(formula);

}
function getrowIdcolIdFromAddress(address){
    let rowid=Number(address.substring(1))-1;
    let colid=address.charCodeAt(0)-65;
    return {
        rowid,colid
    }
}