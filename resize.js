//SUMMARY:
//To adjust layout and functionality depending on screen size

let images = document.querySelectorAll("img");
window.onload = () => {
    setTimeout(() => {
      document.getElementById('demo').style.display = "none";
      document.getElementById('potatoHead').style.display = "inline-block";
    }, 3000);

    //If window is smaller than the width of all the elements

    if(window.outerWidth < 1175 && window.outerWidth > 500 ) {

      document.getElementById('titleDiv').style.marginBottom = ("50px");
      document.getElementById('title').style.paddingLeft = ("90px");
      document.getElementById('title').style.paddingTop = ("10px");

      document.getElementById('image').style.marginLeft = "100px";

      document.getElementById('explanation').style.left = "350px";
      document.getElementById('explanation').style.top = "350px";

      const buttons = document.getElementsByClassName('button');

      buttons[0].setAttribute("style", "margin-top: 360px; margin-left:200px; font-size: 15pt; padding-top:17px;");
      buttons[1].setAttribute("style", "margin-top: 360px; margin-left:270px; font-size: 15pt;");
      buttons[0].parentElement.setAttribute("style", "width:100px;height:35px;");
      buttons[1].parentElement.setAttribute("style", "width:200px;height:55px;");
      buttons[1].parentElement.parentElement.setAttribute("style", "width:250px;height:55px;");


      for (let i = 3; i < images.length - 2; i++ ){
        if (xCounter == 0){
          images[i].style.left = "110px";
        }
        else if (xCounter > 0) {
          images[i].style.left = ((xCounter * 100) + 110) +"px";
        }
        images[i].style.top = Math.floor((i-3)/8) * 100 + 800 +"px";


        xCounter += 1;
        if (xCounter == 8){
          xCounter = 0;
          yCounter += 1;
        }
      }

    }else if (window.outerWidth < 500 ){
      document.getElementById('titleDiv').style.marginBottom = ("50px");
      document.getElementById('title').style.paddingLeft = ("90px");
      document.getElementById('title').style.paddingTop = ("10px");

      document.getElementById('image').style.marginLeft = "100px";

      document.getElementById('explanation').style.left = "350px";
      document.getElementById('explanation').style.top = "350px";

      const buttons = document.getElementsByClassName('button');

      buttons[0].setAttribute("style", "margin-top: 630px; margin-left:200px; font-size: 15pt; padding-top:17px;");
      buttons[1].setAttribute("style", "margin-top: 630px; margin-left:270px; font-size: 15pt;");
      buttons[0].parentElement.setAttribute("style", "width:100px;height:35px;");
      buttons[1].parentElement.parentElement.setAttribute("style", "width:250px;height:55px;");



      for (let i = 3; i < images.length -2; i++ ){
         images[i].style.width = "100px";
         images[i].style.height = "100px";

        if (xCounter == 0){
          images[i].style.left = "90px";
        }
        else if (xCounter > 0) {
          images[i].style.left = ((xCounter * 140) + 90) +"px";
        }
        images[i].style.top = Math.floor((i-3)/6) * 140 + 800 +"px";


        xCounter += 1;
        if (xCounter == 6){
          xCounter = 0;
          yCounter += 1;
        }
      }



    }else{
      document.getElementById('title').style.paddingLeft = ("300px");
      for (let i = 3; i < images.length - 2; i++ ){
        images[i].style.width = "70px";
        images[i].style.height = "70px";

        if (xCounter == 0){
          images[i].style.left = "800px";
        }
        else if (xCounter > 0) {
          images[i].style.left = ((xCounter * 100) + 800) +"px";
          //images[i].style.left = (xCounter * 100)+ 100 +"px";

        }
        images[i].style.top = Math.floor((i-3)/4) * 100 + 120 +"px";
        //images[i].style.top = Math.floor((i-3)/5) * 100 + 40 +"px";


        xCounter += 1;
        if (xCounter == 4){
          xCounter = 0;
          yCounter += 1;
        }
      }
    }
};
