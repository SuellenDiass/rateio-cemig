import {
  useContext
}
from "react";

import {
  RateioContext
}
from "../context/RateioContext";

function ConfiguracaoRateio() {

  const {

    consumoComum

  } = useContext(
    RateioContext
  );

  return (

    <div>

      <h2>
        Configuração do Rateio
      </h2>

      <table
        border="1"
        cellPadding="10"
      >

        <thead>

          <tr>

            <th>
              Configuração
            </th>

            <th>
              Valor
            </th>

          </tr>

        </thead>

        <tbody>

          {/* ILUMINAÇÃO */}

          <tr>

            <td>
              Iluminação
            </td>

            <td>

              R$

              {" "}

              {(consumoComum.iluminacao || 0)
                .toFixed(2)}

            </td>

          </tr>

          {/* MULTA */}

          <tr>

            <td>
              Multa
            </td>

            <td>

              R$

              {" "}

              {(consumoComum.multa || 0)
                .toFixed(2)}

            </td>

          </tr>

          {/* JUROS */}

          <tr>

            <td>
              Juros
            </td>

            <td>

              R$

              {" "}

              {(consumoComum.juros || 0)
                .toFixed(2)}

            </td>

          </tr>

          {/* CORREÇÃO */}

          <tr>

            <td>
              Correção
            </td>

            <td>

              R$

              {" "}

              {(consumoComum.correcao || 0)
                .toFixed(2)}

            </td>

          </tr>

          {/* OUTROS */}

          <tr>

            <td>
              Outros
            </td>

            <td>

              R$

              {" "}

              {(consumoComum.outros || 0)
                .toFixed(2)}

            </td>

          </tr>

          {/* PARTICIPANTES */}

          <tr>

            <td>
              Participantes
            </td>

            <td>

              {consumoComum.participantes || 0}

            </td>

          </tr>

        </tbody>

      </table>

    </div>

  );

}

export default ConfiguracaoRateio;