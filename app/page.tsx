import Hero from "@/sections/Hero";
import PossoAjudar from "@/sections/PossoAjudar";
import Diferenciais from "@/sections/Diferenciais";
import PessoasDizem from "@/sections/PessoasDizem";
import EstouParaOuvir from "@/sections/EstouParaOuvir";
import QuemSouEu from "@/sections/QuemSouEu";
import AcompPsiquico from "@/sections/AcompPsiquico";
import OndeAtendo from "@/sections/OndeAtendo";
import ComoChegar from "@/sections/ComoChegar";

export default function Home() {
  return (
    <main>
      <section>
        <Hero />
      </section>
      <section>
        <PossoAjudar />
      </section>
      <section>
        <Diferenciais />
      </section>
      <section>
        <PessoasDizem />
      </section>
      <section>
        <EstouParaOuvir />
      </section>
      <section>
        <QuemSouEu />
      </section>
      <section>
        <AcompPsiquico />
      </section>
      <section>
        <OndeAtendo />
      </section>
      <section>
        <ComoChegar />
      </section>
    </main>
  );
}
