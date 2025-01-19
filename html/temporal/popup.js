document.addEventListener("DOMContentLoaded", () => {
    // Verificar si el popup ya fue mostrado
    const popupShown = localStorage.getItem("popupShown");
  
    if (!popupShown) {
      // Si no se ha mostrado, abre el popup
      window.open("popup.html", "_blank", "width=500,height=500");
  
      // Marcar el popup como mostrado
      localStorage.setItem("popupShown", "true");
    }
  });