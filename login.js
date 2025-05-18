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
        alert("Usuário logado com sucesso!");
   
        
    } else {
        alert("Usuário ou senha incorretos!");
    
    }
return false;
}

