interface Props {
  children: string; //Nesse caso a gente só vai passar o texto pro botão, se voce precisar passar elementos HTML precisa por ReactNode
  onClick: () => void;
  color?: string; // dá pra fazer isso aqui receber 'primary' || 'secondary' pra GARANTIR que a cor vai sair no botao e que ele so pode ser DESSAS cores
}

const ButtonExercitar = ({ children, onClick, color = "danger" }: Props) => {
  return (
    <button type="button" onClick={onClick} className={"btn btn-" + color}>
      {children}
    </button>
  );
};

export default ButtonExercitar;
