import NavBar from "@/components/NavBar";

const tecnologias = ["Next.js", "React", "JavaScript", "CSS global", "App Router"];

export default function Sobre() {
  return (
    <div className="portfolio-page">
      <NavBar />
      <main className="portfolio-main">
        <section className="portfolio-header">
          <span className="eyebrow">Sobre</span>
          <h1>Perfil, tecnologias e base do projeto.</h1>
          <p>
            Esta pagina organiza a apresentacao pessoal do portifolio e deixa um
            espaco claro para descrever objetivos, areas de interesse e ferramentas
            usadas no desenvolvimento.
          </p>
        </section>

        <section className="portfolio-wide-grid">
          <article className="portfolio-panel">
            <h2>Resumo profissional</h2>
            <p>
              Desenvolvedor em formacao com interesse em criar interfaces simples,
              responsivas e bem estruturadas. O foco deste portifolio e mostrar
              evolucao tecnica, projetos praticos e capacidade de organizar uma
              aplicacao web moderna.
            </p>
          </article>

          <article className="portfolio-panel">
            <h2>Tecnologias utilizadas</h2>
            <div className="portfolio-tags">
              {tecnologias.map((tecnologia) => (
                <span key={tecnologia}>{tecnologia}</span>
              ))}
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}
