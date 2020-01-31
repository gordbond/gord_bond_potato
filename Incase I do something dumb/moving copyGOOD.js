// var eye = document.getElementById("eyeball");
// var eye2 = document.getElementById("eyeball2");
// var eye3 = document.getElementById("eyeball3");
// var eye4 = document.getElementById("eyeball4");
// var eye5 = document.getElementById("eyeball5");
// var eye6 = document.getElementById("eyeball6");
// //var nose = document.getElementById("nose1");
// var nose2 = document.getElementById("nose2");
// //var nose3 = document.getElementById("nose3");
// var nose4 = document.getElementById("nose4");
// var nose5 = document.getElementById("nose5");
// var nose6 = document.getElementById("nose6");
// //var nose7 = document.getElementById("nose7");
// var nose8 = document.getElementById("nose8");
// //var mouth = document.getElementById("mouth1");
// var mouth2 = document.getElementById("mouth2");
// var mouth3 = document.getElementById("mouth3");
// var mouth5 = document.getElementById("mouth5");
// var mouth6 = document.getElementById("mouth6");
// var mouth7 = document.getElementById("mouth7");
// var hair = document.getElementById("hair1");
// var hair2 = document.getElementById("hair2");
// var hair3 = document.getElementById("hair3");
// var hat = document.getElementById("hat1");
// var hat2 = document.getElementById("hat2");
//
// var leftEar1 = document.getElementById("leftEar1");
// var rightEar1 = document.getElementById("rightEar1");
// var cheek1 = document.getElementById("cheek1");
// var cheek2 = document.getElementById("cheek2");

//
// eye.addEventListener("mousedown", initialClick, false);
// eye2.addEventListener("mousedown", initialClick, false);
// eye3.addEventListener("mousedown", initialClick, false);
// eye4.addEventListener("mousedown", initialClick, false);
// //nose.addEventListener("mousedown", initialClick, false);
// nose2.addEventListener("mousedown", initialClick, false);
// //nose3.addEventListener("mousedown", initialClick, false);
// nose4.addEventListener("mousedown", initialClick, false);
// nose5.addEventListener("mousedown", initialClick, false);
// nose6.addEventListener("mousedown", initialClick, false);
// //nose7.addEventListener("mousedown", initialClick, false);
// nose8.addEventListener("mousedown", initialClick, false);
// //mouth.addEventListener("mousedown", initialClick, false);
// mouth2.addEventListener("mousedown", initialClick, false);
// hair.addEventListener("mousedown", initialClick, false);
// hair2.addEventListener("mousedown", initialClick, false);
// hair3.addEventListener("mousedown", initialClick, false);
// hat.addEventListener("mousedown", initialClick, false);
// mouth7.addEventListener("mousedown", initialClick, false);
// mouth3.addEventListener("mousedown", initialClick, false);
// mouth5.addEventListener("mousedown", initialClick, false);
// mouth6.addEventListener("mousedown", initialClick, false);
// hat2.addEventListener("mousedown", initialClick, false);
// eye5.addEventListener("mousedown", initialClick, false);
// eye6.addEventListener("mousedown", initialClick, false);
// leftEar1.addEventListener("mousedown", initialClick, false);
// rightEar1.addEventListener("mousedown", initialClick, false);
// cheek1.addEventListener("mousedown", initialClick, false);
// cheek2.addEventListener("mousedown", initialClick, false);



// let moving = false;

// for (let i = 3; i < images.length; i++){
//   images[i].addEventListener("mousedown", initialClick, false);
// }





// function move(e){
//   //set back to 80 later
//   var newX = e.clientX - 30;
//   var newY = e.clientY - 30;
//   image.style.left = newX + "px";
//   image.style.top = newY + "px";
//   var nameOfClass = image.className;
//   document.getElementById("explanation").style.display = "none";
//
//   switch(nameOfClass){
//     case "eyes":
//       if (newX < 700){
//         image.style.width = "190px";
//         image.style.height = "190px";
//         newX = e.clientX - 80;
//         newY = e.clientY - 80;
//         image.style.left = newX + "px";
//         image.style.top = newY + "px";
//       }
//       if (newX > 700){
//         image.style.width = "70px";
//         image.style.height = "70px";
//
//       }
//       break;
//     case "hair":
//       if (newX < 700){
//         image.style.width = "600px";
//         image.style.height = "600px";
//         newX = e.clientX - 280;
//         newY = e.clientY - 200;
//         image.style.left = newX + "px";
//         image.style.top = newY + "px";
//       }
//       if (newX > 700){
//         image.style.width = "70px";
//         image.style.height = "70px";
//
//       }
//       break;
//     case "noseTall":
//       if (newX < 700){
//         image.style.width = "150px";
//         image.style.height = "200px";
//         newX = e.clientX - 130;
//         newY = e.clientY - 130;
//         image.style.left = newX + "px";
//         image.style.top = newY + "px";
//       }
//       if (newX > 700){
//         image.style.width = "70px";
//         image.style.height = "70px";
//       }
//       break;
//       case "noseLong":
//         if (newX < 700){
//           image.style.width = "300px";
//           image.style.height = "200px";
//           newX = e.clientX - 130;
//           newY = e.clientY - 130;
//           image.style.left = newX + "px";
//           image.style.top = newY + "px";
//         }
//         if (newX > 700){
//           image.style.width = "70px";
//           image.style.height = "70px";
//         }
//         break;
//     case "mouthLong":
//       if (newX < 700){
//         newX = e.clientX - 130;
//         newY = e.clientY - 100;
//         image.style.left = newX + "px";
//         image.style.top = newY + "px";
//         image.style.width = "380px";
//         image.style.height = "200px";
//       }
//       if (newX > 700){
//         image.style.width = "70px";
//         image.style.height = "70px";
//       }
//       break;
//     case "mouthTall":
//       if (newX < 700){
//         newX = e.clientX - 130;
//         newY = e.clientY - 100;
//         image.style.left = newX + "px";
//         image.style.top = newY + "px";
//         image.style.width = "250px";
//         image.style.height = "200px";
//       }
//       if (newX > 700){
//         image.style.width = "70px";
//         image.style.height = "70px";
//       }
//       break;
//
//     case "hat":
//       if (newX < 700){
//         newX = e.clientX - 130;
//         newY = e.clientY - 100;
//         image.style.left = newX + "px";
//         image.style.top = newY + "px";
//         image.style.width = "550px";
//         image.style.height = "200px";
//       }
//       if (newX > 700){
//         image.style.width = "70px";
//         image.style.height = "70px";
//       }
//       break;
//     case "ears":
//       if (newX < 700){
//         newX = e.clientX - 80;
//         newY = e.clientY - 100;
//         image.style.left = newX + "px";
//         image.style.top = newY + "px";
//         image.style.width = "100px";
//         image.style.height = "150px";
//       }
//       if (newX > 700){
//         image.style.width = "70px";
//         image.style.height = "70px";
//       }
//       break;
//     case "cheeks":
//       if (newX < 700){
//         newX = e.clientX - 80;
//         newY = e.clientY - 100;
//         image.style.left = newX + "px";
//         image.style.top = newY + "px";
//         image.style.width = "150px";
//         image.style.height = "150px";
//       }
//       if (newX > 700){
//         image.style.width = "70px";
//         image.style.height = "70px";
//       }
//       break;
//   }
// }



//
// function initialClick(e) {
//
//   if(moving){
//     document.removeEventListener("mousemove", move);
//     moving = !moving;
//     return;
//   }
//
//   moving = !moving;
//   image = this;
//
//   document.addEventListener("mousemove", move, false);
// }



//GOOOOOODDDDD ONE

images = document.querySelectorAll("img");

for (let i = 3; i < images.length; i++){
  dragElement(images[i]);
}

//Make the DIV element draggable:


function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  // elmnt.onmousedown = dragMouseDown;
  elmnt.addEventListener("mousedown", dragMouseDown, false);
  elmnt.addEventListener("touchstart", dragTouchHold, {passive:true});

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;

    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;

  }

       //FOR TOUCH
    function  dragTouchHold(e) {
        e = e || window.event;
        //e.preventDefault();
        pos3 = e.touches[0].clientX ;
        pos4 = e.touches[0].clientY;

        //document.ontouchend = closeDragTouchElement;
        document.addEventListener("touchend", closeDragTouchElement, {passive:true});
        // call a function whenever the cursor moves:
        //document.ontouchmove = elementTouchDrag;
        document.addEventListener("touchmove", elementTouchDrag, {passive:true});
      }

      function elementTouchDrag(e) {
        e = e || window.event;
        //e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.touches[0].clientX;
        pos2 = pos4 - e.touches[0].clientY;
        pos3 = e.touches[0].clientX;
        pos4 = e.touches[0].clientY;
        // set the element's new position:
        var posY = (elmnt.offsetTop - pos2);
        var posX = (elmnt.offsetLeft - pos1);
        elmnt.style.top = posY + "px";
        elmnt.style.left = posX + "px";

        var nameOfClass = elmnt.className;
        document.getElementById("explanation").style.display = "none";

        switch(nameOfClass){
          case "eyes":
            if (posY < 800){
              elmnt.style.width = "190px";
              elmnt.style.height = "190px";
              posY = (elmnt.offsetTop - (pos2/4));
              posX = (elmnt.offsetLeft- (pos1/4));
              elmnt.style.top = posY + "px";
              elmnt.style.left = posX + "px";

            }
            if (posY > 800){
              elmnt.style.width = "70px";
              elmnt.style.height = "70px";

            }
            break;
          case "hair":
            if (posY < 800){
              elmnt.style.width = "600px";
              elmnt.style.height = "600px";
              posY = (elmnt.offsetTop - (pos2/4));
              posX = (elmnt.offsetLeft- (pos1/4));
              elmnt.style.top = posY + "px";
              elmnt.style.left = posX + "px";

            }
            if (posY > 800){
              elmnt.style.width = "70px";
              elmnt.style.height = "70px";

            }
            break;
          case "noseTall":
            if (posY < 800){
              elmnt.style.width = "150px";
              elmnt.style.height = "200px";
              posY = (elmnt.offsetTop - (pos2/4));
              posX = (elmnt.offsetLeft- (pos1/4));
              elmnt.style.top = posY + "px";
              elmnt.style.left = posX + "px";
            }
            if (posY > 800){
              elmnt.style.width = "70px";
              elmnt.style.height = "70px";
            }
            break;
            case "noseLong":
              if (posY < 800){
                elmnt.style.width = "300px";
                elmnt.style.height = "200px";
                posY = (elmnt.offsetTop - (pos2/4));
                posX = (elmnt.offsetLeft- (pos1/4));
                elmnt.style.top = posY + "px";
                elmnt.style.left = posX + "px";            }
              if (posY > 800){
                elmnt.style.width = "70px";
                elmnt.style.height = "70px";
              }
              break;
          case "mouthLong":
            if (posY < 800){
              posY = (elmnt.offsetTop - (pos2/4));
              posX = (elmnt.offsetLeft- (pos1/4));
              elmnt.style.top = posY + "px";
              elmnt.style.left = posX + "px";
              elmnt.style.width = "380px";
              elmnt.style.height = "200px";
            }
            if (posY > 800){
              elmnt.style.width = "70px";
              elmnt.style.height = "70px";
            }
            break;
          case "mouthTall":
            if (posY < 800){
              posY = (elmnt.offsetTop - (pos2/4));
              posX = (elmnt.offsetLeft- (pos1/4));
              elmnt.style.top = posY + "px";
              elmnt.style.left = posX + "px";
              elmnt.style.width = "250px";
              elmnt.style.height = "200px";
            }
            if (posY > 800){
              elmnt.style.width = "70px";
              elmnt.style.height = "70px";
            }
            break;

          case "hat":
            if (posY < 800){
              posY = (elmnt.offsetTop - (pos2/4));
              posX = (elmnt.offsetLeft- (pos1/4));
              elmnt.style.top = posY + "px";
              elmnt.style.left = posX + "px";
              elmnt.style.width = "550px";
              elmnt.style.height = "200px";
            }
            if (posY > 800){
              elmnt.style.width = "70px";
              elmnt.style.height = "70px";
            }
            break;
          case "ears":
            if (posY < 800){
              posY = (elmnt.offsetTop - (pos2/6));
              posX = (elmnt.offsetLeft- (pos1/6));
              elmnt.style.top = posY + "px";
              elmnt.style.left = posX + "px";
              elmnt.style.width = "100px";
              elmnt.style.height = "150px";
            }
            if (posY > 800){
              elmnt.style.width = "70px";
              elmnt.style.height = "70px";
            }
            break;
          case "cheeks":
            if (posY < 800){
              posY = (elmnt.offsetTop - (pos2/4));
              posX = (elmnt.offsetLeft- (pos1/4));
              elmnt.style.top = posY + "px";
              elmnt.style.left = posX + "px";
              elmnt.style.width = "150px";
              elmnt.style.height = "150px";
            }
            if (posY > 800){
              elmnt.style.width = "70px";
              elmnt.style.height = "70px";
            }
            break;
          }
      }

        function closeDragTouchElement() {
          /* stop moving when mouse button is released:*/
          document.removeEventListener("touchend", closeDragTouchElement);
          //document.ontouchend = null;
          document.removeEventListener("touchmove", elementTouchDrag);
          //document.ontouchmove = null;

        }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    var posY = (elmnt.offsetTop - pos2);
    var posX = (elmnt.offsetLeft - pos1);
    elmnt.style.top = posY + "px";
    elmnt.style.left = posX + "px";


    var nameOfClass = elmnt.className;
    document.getElementById("explanation").style.display = "none";

    switch(nameOfClass){
      case "eyes":
        if (posX < 700){
          elmnt.style.width = "190px";
          elmnt.style.height = "190px";
          posY = (elmnt.offsetTop - (pos2/4));
          posX = (elmnt.offsetLeft- (pos1/4));
          elmnt.style.top = posY + "px";
          elmnt.style.left = posX + "px";

        }
        if (posX > 700){
          elmnt.style.width = "70px";
          elmnt.style.height = "70px";

        }
        break;
      case "hair":
        if (posX < 700){
          elmnt.style.width = "600px";
          elmnt.style.height = "600px";
          posY = (elmnt.offsetTop - (pos2/4));
          posX = (elmnt.offsetLeft- (pos1/4));
          elmnt.style.top = posY + "px";
          elmnt.style.left = posX + "px";

        }
        if (posX > 700){
          elmnt.style.width = "70px";
          elmnt.style.height = "70px";

        }
        break;
      case "noseTall":
        if (posX < 700){
          elmnt.style.width = "150px";
          elmnt.style.height = "200px";
          posY = (elmnt.offsetTop - (pos2/4));
          posX = (elmnt.offsetLeft- (pos1/4));
          elmnt.style.top = posY + "px";
          elmnt.style.left = posX + "px";
        }
        if (posX > 700){
          elmnt.style.width = "70px";
          elmnt.style.height = "70px";
        }
        break;
        case "noseLong":
          if (posX < 700){
            elmnt.style.width = "300px";
            elmnt.style.height = "200px";
            posY = (elmnt.offsetTop - (pos2/4));
            posX = (elmnt.offsetLeft- (pos1/4));
            elmnt.style.top = posY + "px";
            elmnt.style.left = posX + "px";            }
          if (posX > 700){
            elmnt.style.width = "70px";
            elmnt.style.height = "70px";
          }
          break;
      case "mouthLong":
        if (posX < 700){
          posY = (elmnt.offsetTop - (pos2/4));
          posX = (elmnt.offsetLeft- (pos1/4));
          elmnt.style.top = posY + "px";
          elmnt.style.left = posX + "px";
          elmnt.style.width = "380px";
          elmnt.style.height = "200px";
        }
        if (posX > 700){
          elmnt.style.width = "70px";
          elmnt.style.height = "70px";
        }
        break;
      case "mouthTall":
        if (posX < 700){
          posY = (elmnt.offsetTop - (pos2/4));
          posX = (elmnt.offsetLeft- (pos1/4));
          elmnt.style.top = posY + "px";
          elmnt.style.left = posX + "px";
          elmnt.style.width = "250px";
          elmnt.style.height = "200px";
        }
        if (posX > 700){
          elmnt.style.width = "70px";
          elmnt.style.height = "70px";
        }
        break;

      case "hat":
        if (posX < 700){
          posY = (elmnt.offsetTop - (pos2/4));
          posX = (elmnt.offsetLeft- (pos1/4));
          elmnt.style.top = posY + "px";
          elmnt.style.left = posX + "px";
          elmnt.style.width = "550px";
          elmnt.style.height = "200px";
        }
        if (posX > 700){
          elmnt.style.width = "70px";
          elmnt.style.height = "70px";
        }
        break;
      case "ears":
        if (posX < 700){
          posY = (elmnt.offsetTop - (pos2/6));
          posX = (elmnt.offsetLeft- (pos1/6));
          elmnt.style.top = posY + "px";
          elmnt.style.left = posX + "px";
          elmnt.style.width = "100px";
          elmnt.style.height = "150px";
        }
        if (posX > 700){
          elmnt.style.width = "70px";
          elmnt.style.height = "70px";
        }
        break;
      case "cheeks":
        if (posX < 700){
          posY = (elmnt.offsetTop - (pos2/4));
          posX = (elmnt.offsetLeft- (pos1/4));
          elmnt.style.top = posY + "px";
          elmnt.style.left = posX + "px";
          elmnt.style.width = "150px";
          elmnt.style.height = "150px";
        }
        if (posX > 700){
          elmnt.style.width = "70px";
          elmnt.style.height = "70px";
        }
        break;
      }
    }
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/

    document.onmouseup = null;
    document.onmousemove = null;

  }






//FOR TOUCH############



   // var dragItem = document.querySelector("#item");
   // var container = document.querySelector("#container");

   // let images = document.querySelectorAll("img");
 //   var active = false;
 //   var currentX;
 //   var currentY;
 //   var initialX;
 //   var initialY;
 //   var xOffset = 0;
 //   var yOffset = 0;
 //
 //   // for (let i = 3; i < images.length; i++){
 //   //   images[i].className = "dragItems";
 //   // }
 //
 //   let im = document.querySelector("#hair1");
 //
 //   window.addEventListener("touchstart", dragStart, false);
 //   window.addEventListener("touchend", dragEnd, false);
 //   window.addEventListener("touchmove", drag, false);
 //
 //   window.addEventListener("mousedown", dragStart, false);
 //   window.addEventListener("mouseup", dragEnd, false);
 //   window.addEventListener("mousemove", drag, false);
 //
 //
 //
 //   function dragStart(e) {
 //     if (e.type === "touchstart") {
 //       initialX = e.touches[0].clientX - xOffset;
 //       initialY = e.touches[0].clientY - yOffset;
 //     } else {
 //       initialX = e.clientX - xOffset;
 //       initialY = e.clientY - yOffset;
 //     }
 //     // for(let i = 3; i< images.length; i++){
 //     //   if (e.target === images[i]) {
 //     //     active = true;
 //     //   }
 //     // }
 //   if (e.target === im) {
 //     active = true;
 //   }
 // }
 //   function dragEnd(e) {
 //     initialX = currentX;
 //     initialY = currentY;
 //
 //     active = false;
 //   }
 //
 //   function drag(e) {
 //     if (active) {
 //
 //       e.preventDefault();
 //
 //       if (e.type === "touchmove") {
 //         currentX = e.touches[0].clientX - initialX;
 //         currentY = e.touches[0].clientY - initialY;
 //       } else {
 //         currentX = e.clientX - initialX;
 //         currentY = e.clientY - initialY;
 //       }
 //
 //       xOffset = currentX;
 //       yOffset = currentY;
 //       // for(let i = 3; i< images.length; i++){
 //       //   if (e.target === images[i]) {
 //       //     setTranslate(currentX, currentY, images[i]);
 //       //   }
 //       // }
 //
 //       if (e.target === im) {
 //         setTranslate(currentX, currentY, im);
 //       }
 //
 //     }
 //   }
 //
 //   function setTranslate(xPos, yPos, el) {
 //     el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
 //   }
