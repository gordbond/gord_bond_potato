
images = document.querySelectorAll("img");
//runs the dragElemnet function for each of the facial features
for (let i = 3; i < images.length; i++){
  dragElement(images[i]);
}

//Make the DIV element draggable:

//Adds event listeners for mouse down and touch start if so they start drag functions
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
    //if mouse up calls function which ends drag
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

        document.addEventListener("touchend", closeDragTouchElement, {passive:true});
        // call a function whenever the cursor moves:
        document.addEventListener("touchmove", elementTouchDrag, {passive:true});
      }

      function elementTouchDrag(e) {
        e = e || window.event;
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
          document.removeEventListener("touchmove", elementTouchDrag);
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






