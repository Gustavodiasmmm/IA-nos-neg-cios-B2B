function scrollToSection() {
  document.getElementById("sobre").scrollIntoView({ behavior: "smooth" });
}

// Simples validação do formulário
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Mensagem enviada com sucesso! Entraremos em contato.");
});
