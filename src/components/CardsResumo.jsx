import {
  useContext
}
from "react";

import {
  RateioContext
}
from "../context/RateioContext";

function CardsResumo() {

  const {

    unidades,
    fechamento,
    consumoComum

  } = useContext(
    RateioContext
  );

  // =========================
  // TOTAL CONSUMO
  // =========================

  let totalConsumo = 0;

  // =========================
  // TOTAL ILUMINAÇÃO
  // =========================

  const totalIluminacao =

    consumoComum.iluminacao;

  // =========================
  // TOTAL OUTROS
  // =========================

  const totalOutros =

    consumoComum.multa +

    consumoComum.juros +

    consumoComum.correcao +

    consumoComum.outros;

  // =========================
  // TOTAL ARRECADADO
  // =========================

  let totalArrecadado = 0;

  // =========================
  // LOOP DAS UNIDADES
  // =========================

   unidades.forEach(
  (unidade) => {

    // =====================
    // CONSUMO
    // =====================

    const consumo =

      unidade.leituraAtual -

      unidade.leituraAnterior;

    totalConsumo += consumo;

    // =====================
    // CONSUMO UNIDADE
    // =====================

    let valorBase = 0;

    if (

      unidade.tipoRateio ===
      "fixo"

    ) {

      valorBase =
        unidade.valorFixo;

    }

    else if (

      unidade.tipoRateio ===
      "proporcional"

    ) {

      valorBase =

        consumo *

        fechamento.valorKw;

    }

    // =====================
    // TOTAL CONSUMO
    // =====================

    const totalConsumoUnidades =

      unidades.reduce(

        (total, item) => {

          return (

            total +

            (

              item.leituraAtual -

              item.leituraAnterior

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
    // ILUMINAÇÃO
    // =====================

    const valorIluminacao =

      consumoComum.iluminacao /

      consumoComum.participantes;

    // =====================
    // OUTROS
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
    // AJUSTE
    // =====================

    const ajusteRateado =

      unidade.ajusteManual;

    // =====================
    // VALOR FINAL
    // =====================

    const valorFinal =

      valorBase +

      ajusteRateado +

      rateioCondominio +

      valorIluminacao +

      valorOutros;

    // =====================
    // TOTAL GERAL
    // =====================

    totalArrecadado +=
      valorFinal;

  }
);
  return (

    <div>

      <h2>
        Resumo Financeiro
      </h2>

      {/* ========================= */}
      {/* CARDS */}
      {/* ========================= */}

      <div

        style={{

          display: "flex",

          gap: "20px",

          flexWrap: "wrap",

          marginBottom: "20px"

        }}

      >

        {/* ===================== */}
        {/* TOTAL CONSUMO */}
        {/* ===================== */}

        <div

          style={{

            border: "1px solid #ccc",

            padding: "20px",

            minWidth: "200px"

          }}

        >

          <h3>
            Total Consumo
          </h3>

          <p>

            {totalConsumo}

            {" "}kWh

          </p>

        </div>

        {/* ===================== */}
        {/* TOTAL ILUMINAÇÃO */}
        {/* ===================== */}

        <div

          style={{

            border: "1px solid #ccc",

            padding: "20px",

            minWidth: "200px"

          }}

        >

          <h3>
            Iluminação
          </h3>

          <p>

            R$

            {" "}

            {totalIluminacao
              .toFixed(2)}

          </p>

        </div>

        {/* ===================== */}
        {/* TOTAL OUTROS */}
        {/* ===================== */}

        <div

          style={{

            border: "1px solid #ccc",

            padding: "20px",

            minWidth: "200px"

          }}

        >

          <h3>
            Outros
          </h3>

          <p>

            R$

            {" "}

            {totalOutros
              .toFixed(2)}

          </p>

        </div>

        {/* ===================== */}
        {/* TOTAL ARRECADADO */}
        {/* ===================== */}

        <div

          style={{

            border: "1px solid #ccc",

            padding: "20px",

            minWidth: "200px"

          }}

        >

          <h3>
            Total Arrecadado
          </h3>

          <p>

            R$

            {" "}

            {totalArrecadado
              .toFixed(2)}

          </p>

        </div>

      </div>

    </div>

  );

}

export default CardsResumo;