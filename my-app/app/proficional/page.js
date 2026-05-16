import NavBar from "@/components/NavBar";

export default function Proficional() {
  return (
    <div className="portfolio-page">
      <NavBar />
      <main className="portfolio-main">
        <section className="portfolio-header">
          <span className="eyebrow">Experiencia profissional</span>
          <h1>Atuacoes, responsabilidades e competencias praticas.</h1>
          <p>
            Area reservada para descrever experiencias de trabalho, estagios,
            atividades tecnicas e resultados obtidos em ambientes reais.
          </p>
        </section>

        <section className="portfolio-wide-grid">
          <article className="portfolio-panel">
            <h2>Experiencia atual ou mais recente</h2>
            <p>
              Adicione cargo, empresa, periodo e uma descricao objetiva das tarefas.
              Priorize responsabilidades que mostrem autonomia, colaboracao e entrega.
            </p>
          </article>

          <aside className="portfolio-panel">
            <h2>Competencias</h2>
            <ul className="portfolio-list">
              <li>Organizacao de componentes e paginas.</li>
              <li>Desenvolvimento de layouts responsivos.</li>
              <li>Consumo e preparacao de dados para interfaces.</li>
              <li>Versionamento com Git e evolucao incremental.</li>
            </ul>
          </aside>
        </section>
      </main>
    </div>
  );
}
