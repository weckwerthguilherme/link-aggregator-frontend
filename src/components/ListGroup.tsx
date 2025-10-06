//import { Fragment } from "react/jsx-runtime";
//Aqui a gente pode usar <Fragment> pra fazer esse elemento todo mas se vc usar uma tag vazia
//voce nem precisa importar o fragment

interface Link {
  id: number;
  title: string;
  url: string;
}

interface Props {
  items: Link[];
  heading: string;
}

// Props são os inputs passados pra um componente similar a um argumento de função, deve ser IMUTAVEL
// State são os dados manuseados pelo componente, como se fosse uma variavel local dentro de uma função, deve ser MUTAVEL

function ListGroup({ items, heading }: Props) {
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && (
        <p>Nenhum Link Encontrado (O backend está rodando?)</p>
      )}

      <div className="mt-4">
        {" "}
        {items.map((link) => (
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            key={link.id}
            className="btn btn-outline-light d-block p-3 mb-3 text-center"
          >
            {link.title}
          </a>
        ))}
      </div>
    </>
  );
}

export default ListGroup;
