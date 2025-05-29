
let userLogadoNome = JSON.parse(localStorage.getItem("usuarioLogado"));

console.log(userLogadoNome.user);

//FUNÇÃO DE TROCAR TEMA DA PAGINA
const gradients = [
  {
    background:
      "linear-gradient(to right, rgb(255, 255, 255), rgb(51, 92, 115))",
    color: "#000000",
  },

  {
    background: "linear-gradient(to right, rgb(109, 109, 109),  rgb(0, 0, 0))",
    color: "#ffffff",
  },
];

let currentIndex = 0;

function trocartema() {
  currentIndex = (currentIndex + 1) % gradients.length;
  const cxt = document.getElementById("caixatema");
  cxt.style.background = gradients[currentIndex].background;
  cxt.style.color = gradients[currentIndex].color;

  const temastatus = document.getElementById("temastatus");

  temastatus.classList.add("fade-out");

  setTimeout(() => {
    if (currentIndex === 0) {
      document.getElementById("temastatus").src = "/images/sol.png";
    } else {
      document.getElementById("temastatus").src = "/images/lua.png";
    }
    temastatus.classList.remove("fade-out");
  }, 500);
}

const searchAlunos = document.getElementById("formpesquisar");  


searchAlunos.innerHTML = "<ul><li>teste aluno</li></ul>";



