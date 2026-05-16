import "./globals.css";

export const metadata = {
  title: "Portifolio Web",
  description: "Portifolio pessoal com experiencias, estudos e projetos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
