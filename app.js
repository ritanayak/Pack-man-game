document.addEventListener("DOMContentLoaded", function() {
    const pacman = document.getElementById("pacman");
  
    // Initial position
    let x = 180;
    let y = 180;
  
    // Movement function
    function movePacman(direction) {
      switch(direction) {
        case "ArrowUp":
          if (y > 0) y -= 10;
          break;
        case "ArrowDown":
          if (y < 380) y += 10;
          break;
        case "ArrowLeft":
          if (x > 0) x -= 10;
          break;
        case "ArrowRight":
          if (x < 380) x += 10;
          break;
      }
      pacman.style.top = y + "px";
      pacman.style.left = x + "px";
    }
  
    // Event listener for keyboard input
    document.addEventListener("keydown", function(event) {
      movePacman(event.key);
    });
  });
  