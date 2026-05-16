import NavBar from "@/components/NavBar";

const projetos = [
  {
    nome: "PortfólioWeb",
    descricao: "Aplicação em Next.js para organizar perfil, estudos, experiência e projetos.",
    status: "Em andamento",
    github: "https://github.com/Giantrafa/PortifolioWeb",
  },
  {
    nome: "Projeto Acadêmico",
    descricao: "Projeto Criado Para Final do Semestre.",
    status: "Para preencher",
    github: "",
  },
];

export default function Projetos() {
  return (
    <div className="portfolio-page">
      <NavBar />
      <main className="portfolio-main">
        <section className="portfolio-header">
          <span className="eyebrow">Projetos Desenvolvidos</span>
          <h1>Entregas para Demonstrar Prática e Evolução.</h1>
          <p>
            Lista inicial de projetos. Cada item pode receber links para GitHub,
            deploy, imagens, tecnologias usadas e aprendizados principais.
          </p>
        </section>

        <section className="project-list">
          {projetos.map((projeto) => (
            <article className="project-card" key={projeto.nome}>
              <div>
                <h2>{projeto.nome}</h2>
                <p>{projeto.descricao}</p>                
                {projeto.github && (
                  <div className="project-links">
                    <a
                      className="project-link"
                      href={projeto.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ver no GitHub
                    </a>
                  </div>
                )}
              </div>
              <span className="project-status">{projeto.status}</span>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
