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
        if (form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");

        const nomeUsuario = document.getElementById("usuario").value;
        const emailUsuario = document.getElementById("email").value;
        const senhaUsuario = document.getElementById("password").value;
        const senhaConfirmacao = document.getElementById("passwordConf").value;
        if (senhaUsuario !== senhaConfirmacao) {
          alert("Senhas não coincidem");
          return;
        }
        let user = {
          nome: nomeUsuario,
          email: emailUsuario,
          senha: senhaUsuario,
        };
        usuarios.push(user);
        console.log(usuarios);
      },
      false
    );
  });
})();
console.log(usuarios);
