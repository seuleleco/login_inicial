//login
//const loginform = document.getElementById("loginform");

function fazerLogin() {
    const dadosSalvo = JSON.parse(localStorage.getItem("userbd")) || [];
    const usuarioDigitado = document.getElementById("usertext").value;
    const senhaDigitada = document.getElementById("password").value;
    

    
    
  
    const usuarioEncontrado = dadosSalvo.find((usuario) => {
        return usuario.user === usuarioDigitado && usuario.senha === senhaDigitada;
    });

    if (usuarioEncontrado){
        alert("Usuário logado com sucesso!");
        const redirects = {
            "aluno": "aluno_area.html",
            "professor": "professor_area.html",
            "diretor": "direc_area.html"
        }
          windows.location.href = redirects[usuarioEncontrado.usertype];



    }
    
     else {
        alert("Usuário ou senha incorretos!");
    
    }
    
};
