//import { Fragment } from "react/jsx-runtime";
//Aqui a gente pode usar <Fragment> pra fazer esse elemento todo mas se vc usar uma tag vazia
//voce nem precisa importar o fragment

import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

// Props são os inputs passados pra um componente similar a um argumento de função, deve ser IMUTAVEL
// State são os dados manuseados pelo componente, como se fosse uma variavel local dentro de uma função, deve ser MUTAVEL

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No Item Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onMouseOver={() => {
              setSelectedIndex(index);
            }}
            onClick={() => {
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
