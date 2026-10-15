const texto = document.getElementById("temperatura");
const botao = document.getElementById("atualizar");

async function carregarTempo() {
  texto.textContent = "A carregar...";
  try {
    const url = "https://api.open-meteo.com/v1/forecast?latitude=-12.58&longitude=13.41&current=temperature_2m";
    const resposta = await fetch(url);
    if (!resposta.ok) {
      throw new Error("Resposta inválida da API");
    }
    const dados = await resposta.json();
    const temp = dados.current.temperature_2m;
    texto.textContent = "Agora: " + temp + " °C";
  } catch (erro) {
    texto.textContent = "Não foi possível obter o tempo. Tente outra vez.";
    console.error(erro);
  }
}

botao.addEventListener("click", carregarTempo);
carregarTempo();