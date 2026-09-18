const formulario = document.getElementById('form-cadastro');
const mensagem = document.getElementById('mensagem');

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede a página de recarregar

    mensagem.textContent = "Cadastro realizado com sucesso!";
    formulario.reset(); // Limpa as caixas de texto

    const nome = document.querySelector('input[placeholder="Nome completo"]').value.trim();
    const email = document.querySelector('input[placeholder="Email"]').value.trim();
    const senha = document.querySelector('input[placeholder="Senha"]').value.trim();

if (nome === '' || email === '' || senha === '') {
        // Mensagem de erro caso algum campo esteja em branco
        mensagem.textContent = "Por favor, preencha todos os campos para realizar o cadastro!";
        mensagem.style.color = "red";
    } else {
        // Mensagem de sucesso quando todos os campos estiverem preenchidos
        mensagem.textContent = "Cadastro realizado com sucesso!";
        mensagem.style.color = "green";
        formulario.reset(); // Limpa os campos do formulário
    }

});