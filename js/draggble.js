document.addEventListener("DOMContentLoaded", function(){
  


let myimgs = document.querySelectorAll(".divmoy, .coteloc, .konki, .nogi, .fish, .sova");

myimgs.forEach (function(divi){

  let dvijenie = false;
  let offsetX;
  let offsetY;


  divi.addEventListener("mousedown", function (event){
    dvijenie = true;

    offsetX = event.clientX - divi.getBoundingClientRect().left;
    // clientX - свойство горизонтальной координаты курсора
    offsetY = event.clientX - divi.getBoundingClientRect().top;
    // clientX - метод вертикальной координаты курсора
  

function onMouseMove(event){
  if(dvijenie){
    let x = event.clientX - offsetX;
    let y = event.clientY - offsetY;

    divi.style.left = x + "px"; // px пиксели
    divi.style.top = y + "px";
  }
}

function onMouseUp(){
  dvijenie = false;
  document.removeEventListener("mousemove", onMouseMove);
  document.removeEventListener("mouseup", onMouseUp);
}

document.addEventListener("mousemove", onMouseMove);
document.addEventListener ("mouseup", onMouseUp);

});

});
});