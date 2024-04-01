let allimgs=document.getElementsByTagName("img")
let up=document.getElementsByClassName("drag")[0]
let down=document.getElementsByClassName("drop")[0]
function isempty(){
    if(up.children.length==0){
        up.innerHTML="is empty"
    }
}
for(let i=0;i<allimgs.length;i++){
    allimgs[i].addEventListener("dragstart",startdrag)
    allimgs[i].addEventListener("dragend",enddrag)  
}
down.addEventListener("drop",dropped)
down.addEventListener("dragenter",enterdrag)
down.addEventListener("dragover",overdrag)
up.addEventListener("dragleave",leavedrag)
let dataIndexValue=0
function startdrag(e) {
    e.dataTransfer.setData("myimg", e.target.outerHTML);  
    e.target.getAttribute('data-index'); 
    
}
function enddrag(e) {
    e.preventDefault();
    let dataIndexValue = e.target.getAttribute('data-index');
    console.log(dataIndexValue)
    dataIndexValue--;
    e.target.setAttribute("data-index",dataIndexValue)
    console.log(dataIndexValue)
    if(dataIndexValue==0)
    {up.removeChild(e.target)}
    isempty()
}
function dropped(e) {
    e.preventDefault();
    down.innerHTML+= e.dataTransfer.getData("myimg");
}
function overdrag(e) {
    e.preventDefault();
}
function leavedrag(e) {
    e.preventDefault();
}
function enterdrag(e) {
    e.preventDefault();
    down.style.backgroundImage = 'lightyellow';
}



