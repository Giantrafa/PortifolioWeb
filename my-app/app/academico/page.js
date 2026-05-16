import NavBar from "@/components/NavBar";

export default function Academico() {
  return (
    <div className="portfolio-page">
      <NavBar />
      <main className="portfolio-main">
        <section className="portfolio-header">
          <span className="eyebrow">Experiência Acadêmica</span>
          <h1>Formação, Cursos e Aprendizados Relevantes.</h1>
          <p>
            Minha trajetória de estudo, disciplinas importantes, certificados e
            competências desenvolvidas durante a formação.
          </p>
        </section>

        <section className="portfolio-grid">
          <article className="portfolio-card">
            <span className="portfolio-meta">Formação</span>
            <h2>Curso Principal</h2>
            <p>Cursando Sistemas para Internet na UNICAP.</p>
          </article>

          <article className="portfolio-card">
            <span className="portfolio-meta">Disciplinas</span>
            <h2>Conteúdos Estudados</h2>
            <p>
              Programação Web, banco de dados, engenharia de software, redes e
              programação orientada a objetos.
            </p>
          </article>

          <article className="portfolio-card">
            <span className="portfolio-meta">Certificados</span>
            <h2>Cursos Complementares</h2>
            <p>Espaço reservado para adicionar certificados, bootcamps e cursos livres.</p>
          </article>
        </section>
      </main>
    </div>
  );
}
