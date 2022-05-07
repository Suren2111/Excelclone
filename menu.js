let bold = document.querySelector(".bold");
let italic = document.querySelector(".italic");
let underline = document.querySelector(".underline");
let leftalign = document.querySelector(".left");
let centeralign = document.querySelector(".center");
let rightalign = document.querySelector(".right");
let style = document.querySelector("#styles");
let size=document.querySelector("#styles-size");

bold.addEventListener("click", function () {
    setFontInUI("bold", bold);
})
italic.addEventListener("click", function () {
    setFontInUI("italic", italic);
})
underline.addEventListener("click", function () {
    setFontInUI("underline", underline);
})

function setFontInUI(stylename, element) {
    if (lastselectedcell) {
        let { rowid, colid } = getrowIdcolIdFromElement(lastselectedcell);
        let cellobj = db[rowid][colid];
        if (cellobj.fontstyle[stylename]) {
            if (stylename == 'bold') {
                lastselectedcell.style.fontWeight = 'normal';

            }
            else if (stylename == 'italic') {
                lastselectedcell.style.fontStyle = 'normal';

            }
            else {
                lastselectedcell.style.textDecoration = 'none';

            }
            element.classList.remove("font-style-active");




        }
        else {
            if (stylename == 'bold') {
                lastselectedcell.style.fontWeight = 'bold';

            }
            else if (stylename == 'italic') {
                lastselectedcell.style.fontStyle = 'italic';

            }
            else {
                lastselectedcell.style.textDecoration = 'underline';

            }
            element.classList.add("font-style-active");



        }
        cellobj.fontstyle[stylename] = !cellobj.fontstyle[stylename]

    }
}

leftalign.addEventListener("click", function () {
    setAlignUI("left", leftalign);
})
rightalign.addEventListener("click", function () {
    setAlignUI("right", rightalign);
})
centeralign.addEventListener("click", function () {
    setAlignUI("center", centeralign);
})

function setAlignUI(stylename, element) {
    if (lastselectedcell) {
        let { rowid, colid } = getrowIdcolIdFromElement(lastselectedcell);
        let cellobj = db[rowid][colid];
        if (cellobj.alignstyle[stylename]) {
            if (stylename == 'left') {
                lastselectedcell.style.textAlign = "none";
            }
            else if (stylename == 'center') {
                lastselectedcell.style.textAlign = "left";
            }
            else {
                lastselectedcell.style.textAlign = "left";
            }
            element.classList.remove("font-style-active")

        }
        else {
            if (stylename == 'left') {
                lastselectedcell.style.textAlign = "left";
            }
            else if (stylename == 'center') {
                lastselectedcell.style.textAlign = "center";
            }
            else {
                lastselectedcell.style.textAlign = "right";
            }
            element.classList.add("font-style-active")
        }
        cellobj.alignstyle[stylename] = !cellobj.alignstyle[stylename]
    }
}

style.addEventListener("change", function () {
    let op = style.value;
    if (lastselectedcell) {
       lastselectedcell.style.fontFamily = op;
    }
})
size.addEventListener("change",function(){
    let sz=size.value;
    if(lastselectedcell){
        lastselectedcell.style.fontSize=sz+"px";
    }
})









