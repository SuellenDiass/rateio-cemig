import FechamentoMensal from "../components/FechamentoMensal";
import LeiturasUnidades from "../components/LeiturasUnidades";
import ConfiguracaoRateio from "../components/ConfiguracaoRateio";
import ResultadoRateio from "../components/ResultadoRateio";
import CardsResumo from "../components/CardsResumo";

export default function Dashboard() {
  return (
    <div>
      <h1>Sistema de Rateio</h1>

      <FechamentoMensal />

      <LeiturasUnidades />

      <ConfiguracaoRateio />

      <ResultadoRateio />

      <CardsResumo />
    </div>
  );
}