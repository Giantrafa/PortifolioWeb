import NavBar from "@/components/NavBar";

export default function Profissional() {
  return (
    <div className="portfolio-page">
      <NavBar />
      <main className="portfolio-main">
        <section className="portfolio-header">
          <span className="eyebrow">Experiência Profissional</span>
          <h1>Atuações, Responsabilidades e Competências Práticas.</h1>
          <p>
            Estou em busca da minha primeira oportunidade profissional na área de
            tecnologia, com foco em estágio e aprendizado prático.
          </p>
        </section>

        <section className="portfolio-wide-grid">
          <article className="portfolio-panel">
            <h2>Experiência Atual ou Mais Recente</h2>
            <p>
              Ainda não tenho experiência profissional na área, mas estou procurando
              meu primeiro estágio para aplicar meus conhecimentos em desenvolvimento
              web, banco de dados e organização de projetos.
            </p>
          </article>

          <aside className="portfolio-panel">
            <h2>Competências</h2>
            <ul className="portfolio-list">
              <li>Desenvolvimento de páginas com React e Next.js.</li>
              <li>Construção de layouts responsivos com CSS.</li>
              <li>Noções de banco de dados com MySQL.</li>
              <li>Organização de código, componentes e rotas.</li>
            </ul>
          </aside>
        </section>
      </main>
    </div>
  );
}
