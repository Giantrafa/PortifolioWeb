import NavBar from "@/components/NavBar";
import TecnologiasApi from "@/components/TecnologiasApi";

const tecnologias = ["Next.js", "React", "JavaScript", "CSS", "App Router", "API"];

export default function Sobre() {
  return (
    <div className="portfolio-page">
      <NavBar />
      <main className="portfolio-main">
        <section className="portfolio-header">
          <span className="eyebrow">Sobre</span>
          <h1>Perfil, Tecnologias e Base do Projeto.</h1>
          <p>Meu nome é Rafael, sou estudante de Sistemas para Internet na UNICAP.</p>
        </section>

        <section className="portfolio-wide-grid">
          <article className="portfolio-panel">
            <h2>Resumo Profissional</h2>
            <p>
              Desenvolvedor em formação com interesse em Front End e Back End,
              explorando diferentes áreas para evoluir como profissional.
            </p>
          </article>

          <article className="portfolio-panel">
            <h2>Tecnologias Utilizadas Neste Portfólio</h2>
            <div className="portfolio-tags">
              {tecnologias.map((tecnologia) => (
                <span key={tecnologia}>{tecnologia}</span>
              ))}
            </div>
          </article>

          <article className="portfolio-panel">
            <h2>Tecnologias que Utilizo</h2>
            <p>
              Esta área chama uma API interna para demonstrar as tecnologias que
              sei usar.
            </p>
            <TecnologiasApi />
          </article>
        </section>
      </main>
    </div>
  );
}
