import { useState, useEffect } from "react";
import ListGroup from "./components/ListGroup";
import axios from "axios";

interface Link {
  id: number;
  title: string;
  url: string;
}

function App() {
  const [links, setLinks] = useState<Link[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const apiUrl = `${import.meta.env.VITE_API_URL}/links`;

    axios
      .get(apiUrl)
      .then((response) => {
        setLinks(response.data);
      })
      .catch((error) => {
        console.error("Houve um erro ao buscar os links:", error);
        // Se der erro, guardamos uma mensagem para o usuário
        setError(
          "Não foi possível carregar os links. Tente recarregar a página ou tente novamente após alguns minutos."
        );
      })
      .finally(() => {
        // Quando a requisição terminar, paramos o carregamento
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="container mt-5 text-light">
      <div className="text-center mb-4">
        <img
          src="/superintendente_avatar.png"
          alt="Foto do Perfil"
          style={{ width: "150px", height: "150px" }}
        />
        <h2 className="mt-3">Guilherme Weckwerth</h2>
        <p className="text-white-50">Bem vindo ao meu agregador de links!</p>
      </div>

      {/* Aqui começa a lógica de renderização condicional */}

      {/* Se estiver carregando, mostre o spinner */}
      {isLoading && (
        <div className="d-flex flex-column align-items-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Carregando...</span>
          </div>
          <p className="mt-3">Acordando o backend... Por favor, aguarde.</p>
        </div>
      )}

      {/* Se houver um erro, mostre a mensagem de erro */}
      {error && <p className="text-center text-danger">{error}</p>}

      {/* Se não estiver carregando E não houver erro, mostre a lista */}
      {!isLoading && !error && <ListGroup items={links} heading="Meus Links" />}
    </div>
  );
}

export default App;
