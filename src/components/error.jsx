// src/pages/notFound.jsx
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>404 - Página não encontrada</h1>
      <p>A URL que você tentou acessar não existe.</p>
      <Link to="/">Voltar para a Home</Link>
    </div>
  );
}