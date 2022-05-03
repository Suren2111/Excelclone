let bold=document.querySelector(".bold");
let italic=document.querySelector(".italic");
let underline=document.querySelector(".underline");

bold.addEventListener("click",function(){
   setFontInUI("bold",bold);
})
italic.addEventListener("click",function(){
    setFontInUI("italic",italic);
})
underline.addEventListener("click",function(){
    setFontInUI("underline",underline);
})

function setFontInUI(stylename,element){
    
}