/* const main = require("./main") */
(() => {
  "use strict";

  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
        const usuario = document.getElementById("usuario").value;
        console.log(usuario);
      },
      false
    );
  });
})();
/* console.log(usuarios); */
/* module.exports = cadastroComValidacao; */
