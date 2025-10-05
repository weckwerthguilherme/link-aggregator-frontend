//Boa pratica em react é nomear funções com PascalCasing
//Legal pra ver codigo JSX ser convertido em JS https://babeljs.io/repl
function Message () {
    const nome = "Eu";
    if (nome)
        return <h1>HelloOOOO {nome}</h1>;
    return <h1>HelloOOOO world</h1>;
}

export default Message;