document.addEventListener("DOMContentLoaded", function (){
  function checkpopup(){
    let session= localStorage.getItem("usersession");
    if(!session){
      window.location="index.html";
      return;
    }
    let loginData=JSON.parse(session);
    let tiempoActual=Date.now();

    if(tiempoActual > loginData.expiresAt){
      localStorage.removeItem("usersession");
      window.location= "index.html";
    }
    if(localStorage.getItem("perfilOk")){
      document.getElementById("checkPerfil").style.display="inline";
    }
    if(localStorage.getItem("panelesOk")){
      document.getElementById("checkPaneles").style.display="inline";
    }
    
  
  }
  checkpopup();

  document.getElementById("btn1").addEventListener("click", function () {
    localStorage.setItem("perfilOk", "true");
  });

  document.getElementById("btn2").addEventListener("click", function () {
    localStorage.setItem("panelesOk", "true");
  });

  document.querySelector(".popup-continuar a").addEventListener("click", function () {
    if (localStorage.getItem("perfilOk") && localStorage.getItem("panelesOk")) {
        localStorage.setItem("userContinue", "true");
        window.location = "home.html";
    } else {
        alert("Por favor, revisa ambos pasos antes de continuar.");
    }
  });
});




