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

  useEffect(() => {
    const apiUrl = `${import.meta.env.VITE_API_URL}/links`;

    axios
      .get(apiUrl)
      .then((response) => {
        setLinks(response.data);
      })
      .catch((error) => {
        console.error("Houve um erro ao buscar os links:", error);
      });
  }, []);

  return (
    <div>
      <ListGroup items={links} heading="Meus Links" />
    </div>
  );
}

export default App;
