function submitForm() {
  var form = document.getElementById("myForm");

  if (!form) {
    console.error("No se encontró el formulario");
    return;
  }

  var formData = new FormData(form);

  fetch("https://formspree.io/f/xzbnzlwe", {
    method: "POST",
    headers: {
      // Puedes configurar los encabezados según sea necesario
    },
    body: formData, // Pasar directamente el objeto FormData
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al enviar el formulario");
      }
      return response.json(); // Si Formspree devuelve una respuesta JSON
    })
    .then((data) => {
      // Manejar la respuesta si es necesario
      console.log("Formulario enviado con éxito", data);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
}
