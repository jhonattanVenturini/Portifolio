// Envio do formulário
document.getElementById('formContato').addEventListener('submit', function(e){
    e.preventDefault();
    alert('Mensagem enviada! Entrarei em contato em breve.');
    this.reset();
});
