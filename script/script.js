function change_text() {

  versions = ["", "", "", "", "", "", "", "", "", ""];

  for (var i = 10; i > 0; i--) {
    versions[i] = "0.0." + i;
  }
  
  var bob_txt = document.getElementById("bobio-version-text");
  var bob_div = document.createElement("div");
  document.getElementById("bobio-version-text").style.color = 'white';

  var txt = "";
   
  for (var i = 0; i < 10; i++) {
    txt += "<center>";
    txt += versions[i]; //  + "<pre>" :: "<center>" + i + "</center>"
    txt += "</center>";
    txt += "<br>";
  }
  bob_txt.style.width = "100px";
  bob_txt.style.backgroundColor = "#474747";
  bob_txt.style.height = "10px";
  bob_txt.innerHTML = txt;
}
