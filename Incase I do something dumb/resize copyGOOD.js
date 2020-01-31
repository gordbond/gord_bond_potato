let images = document.querySelectorAll("img");
window.onload = () => {
    document.getElementById('loading').style.display = "none";
    document.getElementById('potatoHead').style.display = "inline-block";
    //If window is smaller than the width of all the elements
    if(window.outerWidth < 1280) {
      document.getElementById('titleDiv').style.marginBottom = ("50px");
      document.getElementById('title').style.paddingLeft = ("90px");
      document.getElementById('title').style.paddingTop = ("10px");

      document.getElementById('image').style.marginLeft = "100px";

      document.getElementById('explanation').style.left = "350px";
      document.getElementById('explanation').style.top = "350px";

      const buttons = document.getElementsByClassName('button');

      buttons[0].setAttribute("style", "margin-top: 650px; margin-left:150px; font-size: 30pt;");
      buttons[1].setAttribute("style", "margin-top: 650px; margin-left:250px; font-size: 30pt; width:300px;");



      for (let i = 3; i < images.length; i++ ){
        // images[i].style.width = "70px";
        // images[i].style.height = "70px";

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
      document.getElementById('title').style.paddingLeft = ("300px");
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
};
