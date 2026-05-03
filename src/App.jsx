import FechamentoMensal
from "./components/FechamentoMensal";

import LeiturasUnidades
from "./components/LeiturasUnidades";

import ConfiguracaoRateio
from "./components/ConfiguracaoRateio";

import ResultadoRateio
from "./components/ResultadoRateio";

import CardsResumo
from "./components/CardsResumo";

import HistoricoMensal
from "./components/HistoricoMensal";

function App() {

  return (

    <div className="container">

      <h1>

        Sistema Rateio Cemig

      </h1>

      <div className="card">

        <FechamentoMensal />

      </div>

      <div className="card">

        <LeiturasUnidades />

      </div>

      <div className="card">

        <ConfiguracaoRateio />

      </div>

      <div className="card">

        <ResultadoRateio />

      </div>

      <div className="card">

        <CardsResumo />

      </div>

      <div className="card">

        <HistoricoMensal />

      </div>

    </div>

  );

}

export default App;