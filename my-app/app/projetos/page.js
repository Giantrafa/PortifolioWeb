import NavBar from "@/components/NavBar";

const projetos = [
  {
    nome: "PortifolioWeb",
    descricao: "Aplicacao em Next.js para organizar perfil, estudos, experiencia e projetos.",
    status: "Em andamento",
  },
  {
    nome: "Projeto academico",
    descricao: "Reserve este card para um trabalho de faculdade com objetivo, tecnologias e aprendizados.",
    status: "Para preencher",
  },
  {
    nome: "Sistema pratico",
    descricao: "Use este espaco para um projeto com telas, regras de negocio, API ou banco de dados.",
    status: "Para preencher",
  },
];

export default function Projetos() {
  return (
    <div className="portfolio-page">
      <NavBar />
      <main className="portfolio-main">
        <section className="portfolio-header">
          <span className="eyebrow">Projetos desenvolvidos</span>
          <h1>Entregas para demonstrar pratica e evolucao.</h1>
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
              </div>
              <span className="project-status">{projeto.status}</span>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
