// (1) Constante para armazenar a curiosidade
const curiosity = "Missal é conhecida como a 'Cidade das Águas' devido ao seu grandenúmero de rios e cachoeiras.";
// (2) Função para mostrar a curiosidade ao usuário
function showCuriosity() {
const messageElement = document.getElementById('message');

// (3) Condicional para verificar se a curiosidade já foi mostrada
if (messageElement.innerHTML === curiosity) {
messageElement.innerHTML = "Você já viu esta curiosidade!";
} else {
messageElement.innerHTML = curiosity;
}
}