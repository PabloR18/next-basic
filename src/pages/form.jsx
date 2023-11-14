import { useState } from "react"

export default function Form() {

    const [name, setName] = useState("")
    const [idade, setIdade] = useState(0)

    function salvarUser() {
        fetch('api/form', {
            method: 'POST',
            body: { name, idade }
        })
    }

    return (
        <>
            <h1>
                Integração com API #02
            </h1>
            <form action="">
                <input type="text" useRef={name} onClick={e => setName(e.target.value)} />
                <input type="number" useRef={idade} onClick={e => setIdade(e.target.value)} />
                <button onClick={salvarUser()}>Enviar</button>
            </form>
        </>
    )
}   