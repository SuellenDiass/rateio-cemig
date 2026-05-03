import {
  useContext
}
from "react";

import {
  RateioContext
}
from "../context/RateioContext";

export default function FechamentoMensal() {

  const {

    fechamento,
    setFechamento,

    consumoComum,
    setConsumoComum,

    salvarFechamento

  } = useContext(
    RateioContext
  );

  // =========================
  // ALTERAR FECHAMENTO
  // =========================

  function alterarFechamento(
    campo,
    valor
  ) {

    setFechamento({

      ...fechamento,

      [campo]:

        campo === "referencia"

          ? valor

          : Number(valor)

    });

  }

  // =========================
  // ALTERAR CONSUMO COMUM
  // =========================

  function alterarConsumo(
    campo,
    valor
  ) {

    setConsumoComum({

      ...consumoComum,

      [campo]: Number(valor)

    });

  }

  return (

    <div

      style={{

        background: "#fff",

        padding: "20px",

        borderRadius: "12px",

        marginBottom: "20px",

        boxShadow:
          "0 2px 8px rgba(0,0,0,0.1)"

      }}

    >

      <h2>
        Fechamento Mensal
      </h2>

      {/* ========================= */}
      {/* DADOS PRINCIPAIS */}
      {/* ========================= */}

      <div

        style={{

          display: "grid",

          gridTemplateColumns:
            "repeat(4, 1fr)",

          gap: "15px",

          marginTop: "20px"

        }}

      >

        {/* REFERÊNCIA */}

        <div>

          <label>
            Referência
          </label>

          <input

            type="text"

            value={
              fechamento.referencia
            }

            onChange={(e) =>

              alterarFechamento(

                "referencia",

                e.target.value

              )

            }

            style={inputStyle}

          />

        </div>

        {/* KW TOTAL */}

        <div>

          <label>
            kW Total
          </label>

          <input

            type="number"

            step="0.01"

            value={
              fechamento.kwTotal
            }

            onChange={(e) =>

              alterarFechamento(

                "kwTotal",

                e.target.value

              )

            }

            style={inputStyle}

          />

        </div>

        {/* VALOR KW */}

        <div>

          <label>
            Valor do kW
          </label>

          <input

            type="number"

            step="0.00000001"

            value={
              fechamento.valorKw
            }

            onChange={(e) =>

              alterarFechamento(

                "valorKw",

                e.target.value

              )

            }

            style={inputStyle}

          />

        </div>

        {/* PARTICIPANTES */}

        <div>

          <label>
            Participantes
          </label>

          <input

            type="number"

            value={
              consumoComum.participantes
            }

            onChange={(e) =>

              alterarConsumo(

                "participantes",

                e.target.value

              )

            }

            style={inputStyle}

          />

        </div>

      </div>

      {/* ========================= */}
      {/* CONSUMO COMUM */}
      {/* ========================= */}

      <h3

        style={{
          marginTop: "30px"
        }}

      >

        Desmembramento
        Consumo Comum

      </h3>

      <div

        style={{

          display: "grid",

          gridTemplateColumns:
            "repeat(5, 1fr)",

          gap: "15px",

          marginTop: "15px"

        }}

      >

        {/* ILUMINAÇÃO */}

        <div>

          <label>
            Iluminação
          </label>

          <input

            type="number"

            step="0.01"

            value={
              consumoComum.iluminacao
            }

            onChange={(e) =>

              alterarConsumo(

                "iluminacao",

                e.target.value

              )

            }

            style={inputStyle}

          />

        </div>

        {/* MULTA */}

        <div>

          <label>
            Multa
          </label>

          <input

            type="number"

            step="0.01"

            value={
              consumoComum.multa
            }

            onChange={(e) =>

              alterarConsumo(

                "multa",

                e.target.value

              )

            }

            style={inputStyle}

          />

        </div>

        {/* JUROS */}

        <div>

          <label>
            Juros
          </label>

          <input

            type="number"

            step="0.01"

            value={
              consumoComum.juros
            }

            onChange={(e) =>

              alterarConsumo(

                "juros",

                e.target.value

              )

            }

            style={inputStyle}

          />

        </div>

        {/* CORREÇÃO */}

        <div>

          <label>
            Correção
          </label>

          <input

            type="number"

            step="0.01"

            value={
              consumoComum.correcao
            }

            onChange={(e) =>

              alterarConsumo(

                "correcao",

                e.target.value

              )

            }

            style={inputStyle}

          />

        </div>

        {/* OUTROS */}

        <div>

          <label>
            Outros
          </label>

          <input

            type="number"

            step="0.01"

            value={
              consumoComum.outros
            }

            onChange={(e) =>

              alterarConsumo(

                "outros",

                e.target.value

              )

            }

            style={inputStyle}

          />

        </div>

      </div>
      {/* ========================= */}
      {/* BOTÃO SALVAR */}
      {/* ========================= */}

      <button

        onClick={
          salvarFechamento
        }

        style={{

          marginTop: "30px",

          padding: "12px 20px",

          border: "none",

          borderRadius: "8px",

          background: "#1976d2",

          color: "#fff",

          cursor: "pointer",

          fontWeight: "bold"

        }}

      >

        Salvar Fechamento

      </button>

    </div>

  );

}

// =========================
// ESTILO INPUT
// =========================

const inputStyle = {

  width: "100%",

  padding: "10px",

  marginTop: "5px",

  borderRadius: "8px",

  border: "1px solid #ccc"

};