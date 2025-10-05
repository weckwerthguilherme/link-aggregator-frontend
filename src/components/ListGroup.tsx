//import { Fragment } from "react/jsx-runtime";
//Aqui a gente pode usar <Fragment> pra fazer esse elemento todo mas se vc usar uma tag vazia
//voce nem precisa importar o fragment

import { useState } from "react";

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
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && (
        <p>Nenhum Link Encontrado (O backend está rodando?)</p>
      )}
      <ul className="list-group">
        {items.map((link, index) => (
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={
              selectedIndex === index
                ? "list-group-item list-group-item-action active"
                : "list-group-item list-group-item-action"
            }
            key={link.id}
            onMouseOver={() => {
              setSelectedIndex(index);
            }}
          >
            {link.title}
          </a>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
