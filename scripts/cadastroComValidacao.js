/* import { usuarios } from "./main"; */
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

function validarFormulario() {
  const senha = document.getElementsByID("password").value;
  const senhaConfirmacao = document.getElementsByID("passwordConf").value;

  if (senha !== senhaConfirmacao) {
    alert("As senhas não são iguais");
    return false;
  }

  return true;
}
/* console.log(usuarios); */
