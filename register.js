//FUNÇÃO DE CADASTRAR USUÁRIO
let usuarios = JSON.parse(localStorage.getItem("userbd")) || [];//ARRAY PARA ARMAZENAR USUÁRIOS
const registerform = document.getElementById("registerform");

registerform.addEventListener("submit", function(event){
  event.preventDefault();
  
  const inputUser = document.getElementById("reguser");
  const inputUsertype = document.getElementById("usertipo");
  const inputSenha = document.getElementById("regpassword");

  /*const user = inputUser.value;
  const senha = inputSenha.value;*/
  const novoUsuario = {
    user: inputUser.value,
    usertype: inputUsertype.value,
    senha: inputSenha.value
  };
  if(usuarios.some(usuario => usuario.user === novoUsuario.user)){
    alert("Usuário já existente!");
    return;
  }
  usuarios.push(novoUsuario);
  localStorage.setItem("userbd", JSON.stringify(usuarios));
  alert("Usuário cadastrado com sucesso!");

    
   
    
});

