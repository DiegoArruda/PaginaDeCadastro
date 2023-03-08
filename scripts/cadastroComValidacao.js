let usuarios = [
  {
    nome: "batata",
    email: "jose.almir@email.com",
    senha: "12345",
  },
  {
    nome: "gabriel-braga",
    email: "gabriel.braga@email.com",
    senha: "12345",
  },
];

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

        const button = document.getElementById("buttonCadastro");

        button.addEventListener("click", function () {
          const nomeUsuario = document.getElementById("usuario").value;
          const emailUsuario = document.getElementById("email").value;
          const senhaUsuario = document.getElementById("password").value;
          let user = {
            nome: nomeUsuario,
            email: emailUsuario,
            senha: senhaUsuario,
          };
          usuarios.push(user);
        });
        console.log(usuarios);
      },
      false
    );
  });
})();

function enviar() {
  const nomeUsuario = document.getElementById("usuario").value;
  const emailUsuario = document.getElementById("email").value;
  const senhaUsuario = document.getElementById("password").value;

  let usuario = {
    nome: nomeUsuario,
    email: emailUsuario,
    senha: senhaUsuario,
  };

  usuarios.push(usuario);
}
console.log(usuarios);
