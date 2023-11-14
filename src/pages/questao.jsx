import { useEffect } from "react";
import { useState } from "react"

export default function Questao() {

    const [questao, setQuestao] = useState("");

    useEffect(() => {
        fetch('http://localhost:4005/api/questao/22')
            .then(resposta => resposta.json())
            .then(setQuestao)
    }, []);

    function mapear() {
        if (questao) {
            return questao.resposta.map(resp => <li key={resp.id}>{resp}</li>)
        }
    }

    return (
        <>
            <h1>Questão</h1>
            <div>
                <span>{questao?.id} - {questao?.enunciado} </span>
                <br />
                {mapear()}
            </div>
        </>
    )
}