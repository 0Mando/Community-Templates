function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var images = document.querySelectorAll('.logo');
  let vpHeight = window.innerHeight;
  let vpWidth = window.innerWidth;

  let i = 0;
  let x = images.length;
  let temp = x/2;
  yPos = 50;

  images.forEach((img) => {

    if(i < temp){
        
      let xPos = getRandomInt(150, (vpWidth * .20));
      let new_xPos = xPos.toString();
      new_xPos = new_xPos + "px";

      //let yPos = getRandomInt(100, vpHeight - 100);
      
      let new_yPos = yPos.toString();
      new_yPos = new_yPos + "px";

      let rotation = getRandomInt(-15,15);
      let new_Rotation = "rotate("+rotation+"deg)";
      
      //let zIndex = getRandomInt(0,13);

      img.style.left = new_xPos;
      img.style.top = new_yPos;
      img.style.transform = new_Rotation;

      yPos += 250;

    } else {
      if(i === temp){
        yPos = 50;
      }
      let xPos = getRandomInt((vpWidth - (vpWidth * .30)), vpWidth - 150);
      let new_xPos = xPos.toString();
      new_xPos = new_xPos + "px";
      
      //let yPos = getRandomInt(100, vpHeight - 100);
      let new_yPos = yPos.toString();
      new_yPos = new_yPos + "px";
      //let zIndex = getRandomInt(0,13);

      let rotation = getRandomInt(-15,15);
      let new_Rotation = "rotate("+rotation+"deg)";

      img.style.left = new_xPos;
      img.style.top = new_yPos;
      img.style.transform = new_Rotation;

      yPos += 250;
    }
    i++;
})