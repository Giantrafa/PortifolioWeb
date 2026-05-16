"use client";

import { useEffect, useState } from "react";

export default function TecnologiasApi() {
  const [tecnologias, setTecnologias] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function carregarTecnologias() {
      try {
        const resposta = await fetch("/api/tecnologias");
        const dados = await resposta.json();
        setTecnologias(dados.tecnologias || []);
      } catch {
        setTecnologias([]);
      } finally {
        setCarregando(false);
      }
    }

    carregarTecnologias();
  }, []);

  if (carregando) {
    return <p className="tech-api-status">Carregando tecnologias...</p>;
  }

  if (!tecnologias.length) {
    return <p className="tech-api-status">Não foi possível carregar as tecnologias.</p>;
  }

  return (
    <div className="tech-api-grid">
      {tecnologias.map((tecnologia) => (
        <article className="tech-api-item" key={tecnologia.nome}>
          <img src={tecnologia.imagem} alt={`Logo ${tecnologia.nome}`} />
          <span>{tecnologia.nome}</span>
        </article>
      ))}
    </div>
  );
}
