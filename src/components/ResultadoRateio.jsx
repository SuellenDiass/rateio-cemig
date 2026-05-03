import {
  useContext
}
from "react";

import {
  RateioContext
}
from "../context/RateioContext";

function ResultadoRateio() {

  const {

    unidades,
    fechamento,
    consumoComum

  } = useContext(
    RateioContext
  );

  // =========================
  // ILUMINAÇÃO RATEADA
  // =========================

  const valorIluminacao =

    consumoComum.iluminacao /

    consumoComum.participantes;

  // =========================
  // OUTROS RATEADOS
  // =========================

  const valorOutros =

    (

      consumoComum.multa +

      consumoComum.juros +

      consumoComum.correcao +

      consumoComum.outros

    )

    /

    consumoComum.participantes;

  // =========================
  // TOTAL CONSUMO UNIDADES
  // =========================

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

  // =========================
  // CONSUMO CONDOMÍNIO
  // =========================

  const consumoCondominio =

    fechamento.kwTotal -

    totalConsumoUnidades;

  // =========================
  // RATEIO CONDOMÍNIO
  // =========================

  const rateioCondominio =

    (

      consumoCondominio *

      fechamento.valorKw

    )

    /

    consumoComum.participantes;
    // =========================
// TOTAL GERAL RATEIO
// =========================

  const totalGeral =

    unidades.reduce(

      (total, unidade) => {

        // =====================
        // CONSUMO
        // =====================

        const consumo =

          unidade.leituraAtual -

          unidade.leituraAnterior;

        // =====================
        // VALOR BASE
        // =====================

        let valorFinal = 0;

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
        // AJUSTE
        // =====================

        valorFinal =

          valorFinal +

          unidade.ajusteManual +

          rateioCondominio +

          valorIluminacao +

          valorOutros;

        return total + valorFinal;

      },

      0

    );

  return (

    <div>

      <h2>
        Resultado do Rateio
      </h2>

      <table
        border="1"
        cellPadding="10"
      >

        <thead>

          <tr>

            <th>
              Unidade
            </th>

            <th>
              Tipo
            </th>

            <th>
              Consumo
            </th>

            <th>
              Consumo Unidade
            </th>

            <th>
              Ajuste
            </th>

            <th>
              Rateio Condomínio
            </th>

            <th>
              Iluminação
            </th>

            <th>
              Outros
            </th>

            <th>
              Valor Final
            </th>

          </tr>

        </thead>

        <tbody>
          
          {unidades.map(
            (unidade, index) => {

              // =====================
              // CONSUMO
              // =====================

              const consumo =

                unidade.leituraAtual -

                unidade.leituraAnterior;

              // =====================
              // VALOR BASE
              // =====================

              let valorFinal = 0;

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
              // AJUSTE
              // =====================

              const ajusteRateado =

                unidade.ajusteManual;

              // =====================
              // VALOR FINAL
              // =====================

              valorFinal =

                valorFinal +

                ajusteRateado +

                rateioCondominio +

                valorIluminacao +

                valorOutros;

              return (

                <tr key={index}>

                  {/* UNIDADE */}

                  <td>

                    {unidade.nome}

                  </td>

                  {/* TIPO */}

                  <td>

                    {unidade.tipoRateio}

                  </td>

                  {/* CONSUMO */}

                  <td>

                    {consumo.toFixed(2)}

                  </td>

                  {/* CONSUMO UNIDADE */}

                  <td>

                    R$

                    {" "}

                    {(

                      consumo *

                      fechamento.valorKw

                    ).toFixed(2)}

                  </td>

                  {/* AJUSTE */}

                  <td>

                    R$

                    {" "}

                    {ajusteRateado.toFixed(2)}

                  </td>

                  {/* RATEIO CONDOMÍNIO */}

                  <td>

                    R$

                    {" "}

                    {rateioCondominio.toFixed(2)}

                  </td>

                  {/* ILUMINAÇÃO */}

                  <td>

                    R$

                    {" "}

                    {valorIluminacao.toFixed(2)}

                  </td>

                  {/* OUTROS */}

                  <td>

                    R$

                    {" "}

                    {valorOutros.toFixed(2)}

                  </td>

                  {/* VALOR FINAL */}

                  <td>

                    <strong>

                      R$

                      {" "}

                      {valorFinal.toFixed(2)}

                    </strong>

                  </td>

                </tr>

              );

            }

          )}

        </tbody>
        <tfoot>

            <tr>

              <td colSpan="8">

                <strong>

                  TOTAL GERAL

                </strong>

              </td>

              <td>

                <strong>

                  R$

                  {" "}

                  {totalGeral.toFixed(2)}

                </strong>

              </td>

            </tr>

        </tfoot>

      </table>

    </div>

  );

}

export default ResultadoRateio;