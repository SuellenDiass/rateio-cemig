import {
  useContext
}
from "react";

import {
  RateioContext
}
from "../context/RateioContext";

function HistoricoMensal() {

  const {

    historicoRateios,

    setHistoricoRateios,

    setFechamento,

    setUnidades,

    setConsumoComum

  } = useContext(
    RateioContext
  );

  // =========================
  // CARREGAR HISTÓRICO
  // =========================

  function carregarHistorico(
    item
  ) {

    setFechamento(
      item.fechamento
    );

    setUnidades(
      item.unidades
    );

    setConsumoComum(
      item.consumoComum
    );

  }
  // =========================
// EXCLUIR HISTÓRICO
// =========================

function excluirHistorico(
  index
) {

  const novaLista =

    historicoRateios.filter(

      (_, i) => i !== index

    );

  setHistoricoRateios(
    novaLista
  );

}

  return (

    <div>

      <h2>
        Histórico Mensal
      </h2>

      {

        historicoRateios.length === 0

        ?

        (

          <p>

            Nenhum fechamento salvo.

          </p>

        )

        :

        (

          <table
            border="1"
            cellPadding="10"
          >

            <thead>

              <tr>

                <th>
                  Referência
                </th>

                <th>
                  Valor Conta
                </th>

                <th>
                  Data Salvamento
                </th>

                <th>
                  Ações
                </th>

              </tr>

            </thead>

            <tbody>

              {

                historicoRateios.map(

                  (item, index) => (

                    <tr key={index}>

                      {/* REFERÊNCIA */}

                      <td>

                        {item.referencia}

                      </td>

                      {/* VALOR CONTA */}

                      <td>

                        R$

                        {" "}

                        {Number(
                          item.valorConta || 0
                        ).toFixed(2)}

                      </td>

                      {/* DATA */}

                      <td>

                        {item.dataSalvamento}

                      </td>

                      {/* BOTÃO */}

                      <td>

                         <div
  style={{
    display: "flex",
    gap: "10px"
  }}
>

  <button

    onClick={() =>

      carregarHistorico(
        item
      )

    }

  >

    Carregar

  </button>

  <button

    onClick={() =>

      excluirHistorico(
        index
      )

    }

  >

    Excluir

  </button>

</div>

                      </td>

                    </tr>

                  )

                )

              }

            </tbody>

          </table>

        )

      }

    </div>

  );

}

export default HistoricoMensal;