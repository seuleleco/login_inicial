
//login
//const loginform = document.getElementById("loginform");

function fazerLogin() {
    const dadosSalvo = JSON.parse(localStorage.getItem("userbd")) || [];
    const usuarioDigitado = document.getElementById("usertext").value;
    const senhaDigitada = document.getElementById("password").value;

  
    const usuarioEncontrado = dadosSalvo.find((usuario) => {
        return usuario.user === usuarioDigitado && usuario.senha === senhaDigitada;
    });
         

    if (usuarioEncontrado) {
        

        localStorage.setItem("usuarioLogado", JSON.stringify({
            user: usuarioEncontrado.user,
            usertype: usuarioEncontrado.usertype
        }));
             
        if (usuarioEncontrado.usertype === "aluno"){
        window.location.href = "redirects/aluno_area.html"; 
       alert("Login realizado com sucesso!");
  }
    else if (usuarioEncontrado.usertype === "professor"){
        window.location.href = "redirects/prof_area.html";
        alert("Login realizado com sucesso!");
    }
    else if (usuarioEncontrado.usertype === "diretor"){
        window.location.href = "redirects/direc_area.html";
        alert("Login realizado com sucesso!");
    }
     else {
        alert("/index.html");
    
    }


    }
    
     else {
        alert("Usuário ou senha incorretos!");
    
    }
    
};
