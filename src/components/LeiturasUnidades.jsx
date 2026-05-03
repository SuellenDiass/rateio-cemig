import {
  useContext
}
from "react";

import {
  RateioContext
}
from "../context/RateioContext";

function LeiturasUnidades() {

  const {

    unidades,
    setUnidades

  } = useContext(
    RateioContext
  );

  // =========================
  // ALTERAR CAMPO
  // =========================

  function alterarCampo(
    index,
    campo,
    valor
  ) {

    const novasUnidades =

      [...unidades];

    // =====================
    // CAMPOS TEXTO
    // =====================

    if (

      campo === "nome" ||

      campo === "tipoRateio"

    ) {

      novasUnidades[index][campo] =

        valor;

    }

    // =====================
    // CAMPOS NUMÉRICOS
    // =====================

    else {

      novasUnidades[index][campo] =

        valor === ""

          ? 0

          : Number(valor);

    }

    setUnidades(
      novasUnidades
    );

  }

  // =========================
  // ADICIONAR UNIDADE
  // =========================

  function adicionarUnidade() {

    const novaUnidade = {

      nome: "",

      leituraAnterior: 0,

      leituraAtual: 0,

      ajusteManual: 0,

      tipoRateio: "proporcional",

      valorFixo: 0

    };

    setUnidades([

      ...unidades,

      novaUnidade

    ]);

  }

  // =========================
  // REMOVER UNIDADE
  // =========================

  function removerUnidade(
    index
  ) {

    const novasUnidades =

      unidades.filter(

        (_, i) =>

          i !== index

      );

    setUnidades(
      novasUnidades
    );

  }

  return (

    <div>

      <h2>
        Leituras das Unidades
      </h2>

      {/* ========================= */}
      {/* BOTÃO ADICIONAR */}
      {/* ========================= */}

      <button

        onClick={
          adicionarUnidade
        }

      >

        + Adicionar Unidade

      </button>

      <br />
      <br />

      {/* ========================= */}
      {/* TABELA */}
      {/* ========================= */}

      <table
        border="1"
        cellPadding="10"
      >

        <thead>

          <tr>

            <th>
              Nome
            </th>

            <th>
              Leitura Anterior
            </th>

            <th>
              Leitura Atual
            </th>

            <th>
              Ajuste Manual
            </th>

            <th>
              Tipo Rateio
            </th>

            <th>
              Valor Fixo
            </th>

            <th>
              Ações
            </th>

          </tr>

        </thead>

        <tbody>

          {unidades.map(

            (unidade, index) => (

              <tr key={index}>

                {/* NOME */}

                <td>

                  <input

                    type="text"

                    value={
                      unidade.nome
                    }

                    onChange={(e) =>

                      alterarCampo(

                        index,

                        "nome",

                        e.target.value

                      )

                    }

                  />

                </td>

                {/* LEITURA ANTERIOR */}

                <td>

                  <input

                    type="number"

                    step="0.01"

                    value={
                      unidade.leituraAnterior
                    }

                    onChange={(e) =>

                      alterarCampo(

                        index,

                        "leituraAnterior",

                        e.target.value

                      )

                    }

                  />

                </td>

                {/* LEITURA ATUAL */}

                <td>

                  <input

                    type="number"

                    step="0.01"

                    value={
                      unidade.leituraAtual
                    }

                    onChange={(e) =>

                      alterarCampo(

                        index,

                        "leituraAtual",

                        e.target.value

                      )

                    }

                  />

                </td>

                {/* AJUSTE MANUAL */}

                <td>

                  <input

                    type="number"

                    step="0.01"

                    value={
                      unidade.ajusteManual
                    }

                    onChange={(e) =>

                      alterarCampo(

                        index,

                        "ajusteManual",

                        e.target.value

                      )

                    }

                  />

                </td>

                {/* TIPO RATEIO */}

                <td>

                  <select

                    value={
                      unidade.tipoRateio
                    }

                    onChange={(e) =>

                      alterarCampo(

                        index,

                        "tipoRateio",

                        e.target.value

                      )

                    }

                  >

                    <option value="proporcional">

                      proporcional

                    </option>

                    <option value="fixo">

                      fixo

                    </option>

                    <option value="isento">

                      isento

                    </option>

                  </select>

                </td>

                {/* VALOR FIXO */}

                <td>

                  {

                    unidade.tipoRateio ===
                    "fixo"

                    ? (

                      <input

                        type="number"

                        step="0.01"

                        value={
                          unidade.valorFixo
                        }

                        onChange={(e) =>

                          alterarCampo(

                            index,

                            "valorFixo",

                            e.target.value

                          )

                        }

                      />

                    )

                    : (

                      <span>

                        automático

                      </span>

                    )

                  }

                </td>

                {/* REMOVER */}

                <td>

                  <button

                    onClick={() =>

                      removerUnidade(
                        index
                      )

                    }

                  >

                    Remover

                  </button>

                </td>

              </tr>

            )

          )}

        </tbody>

      </table>

    </div>

  );

}

export default LeiturasUnidades;