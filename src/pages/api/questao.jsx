export default function questao() {

    fetch('http://localhost:4005/api/questao/1020').then(resposta => resposta.json()).then(json => console.log(json));

    return (
        <>
            Questão
        </>
    )
}