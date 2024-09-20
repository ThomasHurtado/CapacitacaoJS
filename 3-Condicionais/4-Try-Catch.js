try {
    let resultado = 10 / 0; // Isso não gera erro, mas vamos simular outro
    if (resultado === Infinity) {
      throw new Error("Divisão por zero!");
    }
  } catch (erro) {
    console.log("Erro capturado: " + erro.message);
  }
  