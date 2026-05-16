import NavBar from "@/components/NavBar.js";

export default function Home() {
  return (
    <div className="home-page">
      <NavBar />
      <main className="home-main">
        <section className="home-hero">
          <div className="home-hero-text">
            <h1>Portfólio Digital para Apresentar Estudos, Experiências e Projetos Tecnológicos.</h1>
            <div className="home-actions">
              <a className="button-primary" href="/projetos">Ver Projetos</a>
              <a className="button-secondary" href="/sobre">Conhecer Perfil</a>
            </div>
          </div>
        </section>

        <section className="home-section" aria-labelledby="estrutura">
          <div className="home-section-header">
            <span className="eyebrow">Estrutura</span>
            <h2 id="estrutura">Áreas Principais do Portfólio</h2>
          </div>

          <div className="home-grid">
            <a className="home-card" href="/sobre">
              <h3>Sobre</h3>
              <p>Resumo pessoal e tecnologias usadas neste projeto.</p>
            </a>

            <a className="home-card" href="/academico">
              <h3>Acadêmico</h3>
              <p>Formações, cursos e trilhas de aprendizado.</p>
            </a>

            <a className="home-card" href="/profissional">
              <h3>Profissional</h3>
              <p>Experiências e habilidades praticadas.</p>
            </a>

            <a className="home-card" href="/projetos">
              <h3>Projetos</h3>
              <p>Projetos que fiz ou ajudei a fazer.</p>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
