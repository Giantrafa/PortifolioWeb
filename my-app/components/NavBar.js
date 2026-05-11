import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <Link href="/page"> Home </Link>    
      <Link href="./academico"> Acadêmica </Link>
      <Link href="./profissional"> Experiência Profissional </Link>
      <Link href="./projetos"> Projetos Desenvolvidos </Link>
    </nav>
  );
}