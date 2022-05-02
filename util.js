function getrowIdcolId(element){
    let rowid=element.getAttribute("rowid");
    let colid=element.getAttribute("colid");
    return{
        rowid,colid
    }
}