import NavBar from "@/components/NavBar";

export default function Academico() {
  return (
    <div className="portfolio-page">
      <NavBar />
      <main className="portfolio-main">
        <section className="portfolio-header">
          <span className="eyebrow">Experiencia academica</span>
          <h1>Formacao, cursos e aprendizados relevantes.</h1>
          <p>
            Espaco para apresentar a trajetoria de estudo, materias importantes,
            certificados e competencias desenvolvidas ao longo da formacao.
          </p>
        </section>

        <section className="portfolio-grid">
          <article className="portfolio-card">
            <span className="portfolio-meta">Formacao</span>
            <h2>Curso principal</h2>
            <p>Adicione aqui sua instituicao, periodo, curso e principais objetivos.</p>
          </article>
          <article className="portfolio-card">
            <span className="portfolio-meta">Disciplinas</span>
            <h2>Conteudos estudados</h2>
            <p>Programacao web, banco de dados, algoritmos, engenharia de software e redes.</p>
          </article>
          <article className="portfolio-card">
            <span className="portfolio-meta">Certificados</span>
            <h2>Cursos complementares</h2>
            <p>Inclua cursos livres, bootcamps, workshops e treinamentos concluidos.</p>
          </article>
        </section>
      </main>
    </div>
  );
}
