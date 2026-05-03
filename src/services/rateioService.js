export function calcularRateio() {

  const valorTotal = 800;

  const unidades = [

    {
      nome: "Jah Açaí",
      consumo: 355,
      tipo: "fixo",
      valorFixo: 50
    },

    {
      nome: "Cristais",
      consumo: 90,
      tipo: "proporcional"
    },

    {
      nome: "Loja C",
      consumo: 120,
      tipo: "igualitario"
    },

    {
      nome: "Loja D",
      consumo: 70,
      tipo: "isento"
    }

  ];

  let resultado = [];

  // =========================
  // VALORES FIXOS
  // =========================

  const valorFixoTotal =
    unidades
      .filter(u => u.tipo === "fixo")
      .reduce(
        (total, u) =>
          total + u.valorFixo,
        0
      );

  // =========================
  // SALDO RESTANTE
  // =========================

  const saldoRestante =
    valorTotal - valorFixoTotal;

  // =========================
  // UNIDADES PROPORCIONAIS
  // =========================

  const proporcionais =
    unidades.filter(
      u => u.tipo === "proporcional"
    );

  const consumoTotal =
    proporcionais.reduce(
      (total, u) =>
        total + u.consumo,
      0
    );

  // =========================
  // UNIDADES IGUALITÁRIAS
  // =========================

  const igualitarios =
    unidades.filter(
      u => u.tipo === "igualitario"
    );

  const valorIgualitario =
    igualitarios.length > 0
      ? saldoRestante * 0.20 /
        igualitarios.length
      : 0;

  // =========================
  // PROCESSAMENTO
  // =========================

  unidades.forEach(unidade => {

    let valorFinal = 0;

    // FIXO

    if (unidade.tipo === "fixo") {

      valorFinal =
        unidade.valorFixo;

    }

    // PROPORCIONAL

    else if (
      unidade.tipo === "proporcional"
    ) {

      valorFinal =
        (
          unidade.consumo /
          consumoTotal
        ) *
        (saldoRestante * 0.80);

    }

    // IGUALITÁRIO

    else if (
      unidade.tipo === "igualitario"
    ) {

      valorFinal =
        valorIgualitario;

    }

    // ISENTO

    else if (
      unidade.tipo === "isento"
    ) {

      valorFinal = 0;

    }

    resultado.push({

      unidade: unidade.nome,

      tipo: unidade.tipo,

      consumo: unidade.consumo,

      valor: valorFinal

    });

  });

  return resultado;

}