import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="navbar" aria-label="Navegacao principal">
      <Link className="navbar-brand" href="/">PortifolioWeb</Link>
      <div className="navbar-links">
        <Link href="/">Home</Link>
        <Link href="/sobre">Sobre</Link>
        <Link href="/academico">Academico</Link>
        <Link href="/proficional">Experiencia Profissional</Link>
        <Link href="/projetos">Projetos</Link>
      </div>
    </nav>
  );
}
