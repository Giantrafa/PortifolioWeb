import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="navbar" aria-label="Navegação principal">      
      <div className="navbar-links">
        <Link href="/">Home</Link>
        <Link href="/sobre">Sobre</Link>
        <Link href="/academico">Acadêmico</Link>
        <Link href="/profissional">Experiência Profissional</Link>
        <Link href="/projetos">Projetos</Link>
      </div>
    </nav>
  );
}
