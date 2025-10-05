import ListGroup from "./components/ListGroup";
import ButtonExercitar from "./components/ButtonExercitar";

function App() {
  let items = ["Github", "LinkedIn", "Discord", "Instagram"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Links"
        onSelectItem={handleSelectItem}
      />
      <ButtonExercitar color="warning" onClick={() => console.log("clicado")}>
        Meu botao
      </ButtonExercitar>
    </div>
  );
}

export default App;
