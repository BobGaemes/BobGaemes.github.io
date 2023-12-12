const targetEL = document.getElementById('target');
const footerEL = document.getElementById('footer');

fetch('/base.html')
  .then(res => {
    if (res.ok) {
      return res.text();
    }
  })
  .then(htmlSnippet => {
    targetEL.innerHTML = htmlSnippet;
  });

fetch('/footer.html')
  .then(res => {
    if (res.ok) {
      return res.text();
    }
  })
  .then(htmlSnippet => {
    footerEL.innerHTML = htmlSnippet;
  });

// if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//   location.replace("https://phone.bobgaemes.repl.co");
// }
