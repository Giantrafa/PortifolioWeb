import NavBar from "@/components/NavBar.js";

export default function Home() {
  return (
    <div className="home-page">
      <NavBar />
      <main className="home-main">
        <section className="home-hero">
          <div className="home-hero-text">
            <span className="eyebrow">Desenvolvedor em formacao</span>
            <h1>Portifolio para apresentar estudos, experiencia e projetos web.</h1>
            <p>
              Uma estrutura inicial para reunir trajetoria academica, pratica profissional,
              tecnologias utilizadas e projetos desenvolvidos com Next.js e React.
            </p>
            <div className="home-actions">
              <a className="button-primary" href="/projetos">Ver projetos</a>
              <a className="button-secondary" href="/sobre">Conhecer perfil</a>
            </div>
          </div>

          <aside className="profile-card" aria-label="Resumo do perfil">
            <p className="card-label">Foco atual</p>
            <h2>Frontend, interfaces responsivas e organizacao de codigo.</h2>
            <ul>
              <li>Next.js App Router</li>
              <li>Componentes React</li>
              <li>CSS Modules</li>
              <li>Boas praticas de estrutura</li>
            </ul>
          </aside>
        </section>

        <section className="home-section" aria-labelledby="estrutura">
          <div className="home-section-header">
            <span className="eyebrow">Estrutura</span>
            <h2 id="estrutura">Areas principais do portifolio</h2>
          </div>

          <div className="home-grid">
            <a className="home-card" href="/sobre">
              <span>01</span>
              <h3>Sobre</h3>
              <p>Resumo pessoal, tecnologias usadas e modulos que sustentam o projeto.</p>
            </a>
            <a className="home-card" href="/academico">
              <span>02</span>
              <h3>Academico</h3>
              <p>Formacao, disciplinas importantes, cursos e trilhas de aprendizado.</p>
            </a>
            <a className="home-card" href="/proficional">
              <span>03</span>
              <h3>Profissional</h3>
              <p>Experiencias, responsabilidades, habilidades praticadas e resultados.</p>
            </a>
            <a className="home-card" href="/projetos">
              <span>04</span>
              <h3>Projetos</h3>
              <p>Lista de sistemas, telas, estudos e entregas para demonstrar evolucao.</p>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

/*
colocar estilo no CSS
usar uma API (qualquer uma)

abas criadas
home
Sobre(Com todas tecnologias / Modulos que voce utilizou para desenvolver)
experiencia academica 
experiencia proficional 
projetos desenvolvidos 

*/
