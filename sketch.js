  function setup() {
    createCanvas ( 600, 600);
    background ("branco");
    }
  
  function draw() {
      //console.log(mouseIsPressed)
    
    stroke("pink");
    fill ("pink")
    if (mouseIsPressed) {
      square(mouseX, mouseY, 40);
      }
    }