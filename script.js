


dragElement(document.getElementById("window"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {

    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {

    elmnt.onmousedown = dragMouseDown;
  }
  if (document.getElementById(elmnt.id + "header")) {
	document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
} else {
	
	elmnt.onmousedown = dragMouseDown;
}

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
var welcomecreen = document.querySelector("#window")
function closewindow(element){
        element.style.display="none"    
}
function openwindow(element){
    element.style.display="flex"
}
var windowscreenclose=document.querySelector("#closewindow")
var windowscreenopen=document.querySelector("#openwindow")
windowscreenclose.addEventListener("click",function(){
    closewindow(welcomecreen);
});
windowscreenopen.addEventListener("click",function(){
    openwindow(welcomecreen);
});

var CT =new Date().toLocaleString();
        var TT = document.querySelector("#time");
        TT.innerHTML=CT;