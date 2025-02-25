document.addEventListener("DOMContentLoaded", function () {
  const btn1 = document.querySelector(".btn1");
  const btn2 = document.querySelector(".btn2");
  const checkbox1 = document.querySelector("#check1");
  const checkbox2 = document.querySelector("#check2");
  const proceedButton = document.querySelector("#proceed");

  // Verificar si ya se confirmó anteriormente
  if (localStorage.getItem("popupConfirmed")) {
      window.location.href = "perfil.html"; // Redirigir directamente
  }

  let btn1Clicked = false;
  let btn2Clicked = false;

  btn1.addEventListener("click", function () {
      btn1Clicked = true;
      checkbox1.checked = true;
  });

  btn2.addEventListener("click", function () {
      btn2Clicked = true;
      checkbox2.checked = true;
  });

  proceedButton.addEventListener("click", function () {
      if (btn1Clicked && btn2Clicked) {
          localStorage.setItem("popupConfirmed", "true");
          window.location.href = "perfil.html"; // Redirigir
      } else {
          alert("Necesitas confirmar ambos datos");
      }
  });
});





