function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    const body = document.body;
    
    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-250px"; // Oculta el menú
        body.classList.remove("sidebar-active"); // Elimina la clase que desplaza el contenido
    } else {
        sidebar.style.left = "0px"; // Muestra el menú
        body.classList.add("sidebar-active"); // Agrega la clase que desplaza el contenido
    }
}

function doGet() {
    return HtmlService.createHtmlOutputFromFile('form');
  }
  
  function uploadFile(form) {
    try {
      var folder = DriveApp.getFolderById('1ImvXKWVpvMWjAN5GSX_QF0dAjrb3Lw2j');
      var blob = form.myFile; // "myFile" es el nombre del input de archivo en el HTML.
      var file = folder.createFile(blob);
      return "Archivo subido correctamente: " + file.getName();
    } catch (error) {
      return "Error al subir archivo: " + error.message;
    }
  }