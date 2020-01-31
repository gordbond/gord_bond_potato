let resetButton = document.getElementById('resetButton');
// let eye1 = document.getElementById('eyeball');
// let eye2 = document.getElementById('eyeball2');
let nose1 = document.getElementById('nose1');
let mouth1 = document.getElementById('mouth1');
let hair1 = document.getElementById('hair1');
let linkButton = document.getElementById('link');
let xCounter = 0;
let yCounter = 0;
resetButton.addEventListener("click", ()=> {
  if(window.outerWidth < 800) {
    // for (let i = 3; i < images.length; i++ ){
    //    images[i].style.width = "70px";
    //    images[i].style.height = "70px";
    //
    //   if (xCounter == 0){
    //     images[i].style.left = "250px";
    //   }
    //   else if (xCounter > 0) {
    //     images[i].style.left = ((xCounter * 100) + 250) +"px";
    //   }
    //   images[i].style.top = Math.floor((i-3)/5) * 100 + 820 +"px";
    //
    //
    //   xCounter += 1;
    //   if (xCounter == 5){
    //     xCounter = 0;
    //     yCounter += 1;
    //   }
    // }
    document.getElementById('titleDiv').style.marginBottom = ("50px");
    document.getElementById('image').style.marginLeft = "100px";

    document.getElementById('explanation').style.left = "330px";
    document.getElementById('explanation').style.top = "380px";
    for (let i = 3; i < images.length; i++ ){
       images[i].style.width = "70px";
       images[i].style.height = "70px";

      if (xCounter == 0){
        images[i].style.left = "250px";
      }
      else if (xCounter > 0) {
        images[i].style.left = ((xCounter * 100) + 250) +"px";
      }
      images[i].style.top = Math.floor((i-3)/5) * 100 + 820 +"px";


      xCounter += 1;
      if (xCounter == 5){
        xCounter = 0;
        yCounter += 1;
      }
    }
  }else{
    for (let i = 3; i < images.length; i++ ){
      images[i].style.width = "70px";
      images[i].style.height = "70px";

      if (xCounter == 0){
        images[i].style.left = "800px";
      }
      else if (xCounter > 0) {
        images[i].style.left = ((xCounter * 100) + 800) +"px";
      }
      images[i].style.top = Math.floor((i-3)/5) * 100 + 180 +"px";


      xCounter += 1;
      if (xCounter == 5){
        xCounter = 0;
        yCounter += 1;
      }



    }
  }
});
