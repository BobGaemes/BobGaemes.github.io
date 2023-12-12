var GAME_IFRAME;

window.addEventListener("load", (event) => {
  GAME_IFRAME = document.getElementById("game-iframe");
  
  window.onkeydown= function(kb) {
    if(kb.keyCode === 70) {
      fullscreen();
    };
  };
});

function fullscreen() {

  GAME_IFRAME.style.borderRadius = "25px 25px 25px 25px";

  if (GAME_IFRAME.requestFullscreen) {
    GAME_IFRAME.requestFullscreen();
  } else if (GAME_IFRAME.webkitRequestFullscreen) { /* Safari */
    GAME_IFRAME.webkitRequestFullscreen();
  } else if (GAME_IFRAME.msRequestFullscreen) { /* IE11 */
    GAME_IFRAME.msRequestFullscreen();
  }

  GAME_IFRAME.style.borderRadius = "20px 20px 0px 0px";
}
