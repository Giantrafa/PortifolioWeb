import "./globals.css";

export const metadata = {
  title: "Portfólio Web",
  description: "Portfólio pessoal com experiências, estudos e projetos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
