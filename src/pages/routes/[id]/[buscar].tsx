import { useRouter } from "next/router"
import Link from "next/link";

export default function Buscar() {
    const router = useRouter()
    const code = router.query.id;
    const nome = router.query.buscar
    console.log(router)

    return (
        <>
            <div>
                <h1>Rotas / ID / Buscar</h1>
                <h1>Code: {code}</h1>
                <h1>Nome: {nome}</h1>
                <Link href="/routes">Ir para rotas</Link>
            </div>
        </>
    )
}