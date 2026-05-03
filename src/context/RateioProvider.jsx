import {
  useState,
  useEffect
}
from "react";

import {
  RateioContext
}
from "./RateioContext";

export function RateioProvider({
  children
}) {

  // =========================
  // FECHAMENTO
  // =========================

  const [
    fechamento,
    setFechamento
  ] = useState(() => {

    const dadosSalvos =

      localStorage.getItem(
        "fechamento"
      );

    return dadosSalvos

      ? JSON.parse(dadosSalvos)

      : {

          referencia: "04/2026",

          kwTotal: 637,

          valorKw: 1.1258589,

          valorTotal: 807.87

        };

  });

  // =========================
  // UNIDADES
  // =========================

  const [
    unidades,
    setUnidades
  ] = useState(() => {

    const dadosSalvos =

      localStorage.getItem(
        "unidades"
      );

    return dadosSalvos

      ? JSON.parse(dadosSalvos)

      : [

          {
            nome: "Feito a Mão",

            leituraAnterior: 7313.3,

            leituraAtual: 7564.5,

            tipoRateio: "fixo",

            valorFixo: 120,

            ajusteManual: 0
          },

          {
            nome: "Cristal",

            leituraAnterior: 902.86,

            leituraAtual: 936.49,

            tipoRateio: "proporcional",

            ajusteManual: 0
          },

          {
            nome: "Churros",

            leituraAnterior: 1798.1,

            leituraAtual: 1849.2,

            tipoRateio: "proporcional",

            ajusteManual: 0
          },

          {
            nome: "Tatoo",

            leituraAnterior: 177.6,

            leituraAtual: 179.4,

            tipoRateio: "proporcional",

            ajusteManual: 0
          },

          {
            nome: "Lojas Mayuna",

            leituraAnterior: 417.57,

            leituraAtual: 427.30,

            tipoRateio: "proporcional",

            ajusteManual: 0
          },

          {
            nome: "Armazen",

            leituraAnterior: 370.7,

            leituraAtual: 383.10,

            tipoRateio: "proporcional",

            ajusteManual: 0
          }

        ];

  });

  // =========================
  // CONSUMO COMUM
  // =========================

  const [

    consumoComum,
    setConsumoComum
  ] = useState(() => {

    const dadosSalvos =

      localStorage.getItem(
        "consumoComum"
      );

    return dadosSalvos

      ? JSON.parse(dadosSalvos)

      : {

          iluminacao: 66.10,

          multa: 14.37,

          juros: 6.03,

          correcao: 4.20,

          outros: 0,

          participantes: 6

        };

  });
  // =========================
// HISTÓRICO RATEIOS
// =========================

    const [

      historicoRateios,
      setHistoricoRateios

    ] = useState(() => {

      const dadosSalvos =

        localStorage.getItem(
          "historicoRateios"
        );

      return dadosSalvos

        ? JSON.parse(dadosSalvos)

        : [];

    });


  // =========================
  // SALVAR FECHAMENTO
  // =========================

  useEffect(() => {

    localStorage.setItem(

      "fechamento",

      JSON.stringify(
        fechamento
      )

    );

  }, [fechamento]);

  // =========================
  // SALVAR UNIDADES
  // =========================

  useEffect(() => {

    localStorage.setItem(

      "unidades",

      JSON.stringify(
        unidades
      )

    );

  }, [unidades]);

  // =========================
  // SALVAR CONSUMO COMUM
  // =========================

  useEffect(() => {

    localStorage.setItem(

      "consumoComum",

      JSON.stringify(
        consumoComum
      )

    );

  }, [consumoComum]);
  // =========================
// SALVAR HISTÓRICO
// =========================

  useEffect(() => {

    localStorage.setItem(

      "historicoRateios",

      JSON.stringify(
        historicoRateios
      )

    );

  }, [historicoRateios]);
  // =========================
// SALVAR FECHAMENTO
// =========================

 // =========================
// SALVAR FECHAMENTO
// =========================

 // =========================
// SALVAR FECHAMENTO
// =========================

function salvarFechamento() {

  // =====================
  // ILUMINAÇÃO RATEADA
  // =====================

  const valorIluminacao =

    consumoComum.iluminacao /

    consumoComum.participantes;

  // =====================
  // OUTROS RATEADOS
  // =====================

  const valorOutros =

    (

      consumoComum.multa +

      consumoComum.juros +

      consumoComum.correcao +

      consumoComum.outros

    )

    /

    consumoComum.participantes;

  // =====================
  // TOTAL CONSUMO UNIDADES
  // =====================

  const totalConsumoUnidades =

    unidades.reduce(

      (total, unidade) => {

        return (

          total +

          (

            unidade.leituraAtual -

            unidade.leituraAnterior

          )

        );

      },

      0

    );

  // =====================
  // CONSUMO CONDOMÍNIO
  // =====================

  const consumoCondominio =

    fechamento.kwTotal -

    totalConsumoUnidades;

  // =====================
  // RATEIO CONDOMÍNIO
  // =====================

  const rateioCondominio =

    (

      consumoCondominio *

      fechamento.valorKw

    )

    /

    consumoComum.participantes;

  // =====================
  // TOTAL ARRECADADO
  // =====================

  let totalArrecadado = 0;

  unidades.forEach((unidade) => {

    const consumo =

      unidade.leituraAtual -

      unidade.leituraAnterior;

    let valorFinal;

    // =====================
    // FIXO
    // =====================

    if (

      unidade.tipoRateio ===

      "fixo"

    ) {

      valorFinal =

        unidade.valorFixo;

    }

    // =====================
    // PROPORCIONAL
    // =====================

    else if (

      unidade.tipoRateio ===

      "proporcional"

    ) {

      valorFinal =

        consumo *

        fechamento.valorKw;

    }

    // =====================
    // ISENTO
    // =====================

    else {

      valorFinal = 0;

    }

    // =====================
    // AJUSTE MANUAL
    // =====================

    valorFinal +=

      unidade.ajusteManual;

    // =====================
    // RATEIOS
    // =====================

    valorFinal +=

      rateioCondominio +

      valorIluminacao +

      valorOutros;

    totalArrecadado +=

      valorFinal;

  });

  // =====================
  // NOVO HISTÓRICO
  // =====================

  const novoHistorico = {

    referencia:

      fechamento.referencia,

    fechamento,

    unidades,

    consumoComum,

    valorConta:

      totalArrecadado,

    dataSalvamento:

      new Date().toLocaleString(

        "pt-BR"

      )

  };

  // =====================
  // SALVAR
  // =====================

  setHistoricoRateios([

    ...historicoRateios,

    novoHistorico

  ]);

}

  return (

    <RateioContext.Provider

      value={{

        fechamento,
        setFechamento,

        unidades,
        setUnidades,

        consumoComum,
        setConsumoComum,
        historicoRateios,
        setHistoricoRateios,
        salvarFechamento

      }}

    >

      {children}

    </RateioContext.Provider>

  );

}