import { useEffect } from "react";
import { useState } from "react"

export default function questao() {
    const [questao, setQuestao] = useState("");

    useEffect(() => {
        fetch('http://localhost:4005/api/questao/1020').then(resposta => resposta.json()).then(questao => setQuestao(questao))
    }, []);

    function mapear() {
        if (questao) {
            return questao.resposta.map((resposta, i) => {
                return <li key={i}>{resposta}</li>
            })
        }
        return false;
    }

    return (
        <>
            <h1>Questão</h1>
            <div>
                <span>{questao?.enunciado} </span>
                <br />
                {mapear()}
            </div>
        </>
    )
}