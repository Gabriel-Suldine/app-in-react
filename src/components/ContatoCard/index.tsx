import { Icon } from "phosphor-react"
import "./style.css"
type ContatoProps = {
    nome: string,
    email: string,
    descricao: string,
    imagem: string
}

export function ContatoCard({ nome, email, descricao, imagem }: ContatoProps) {
    return (
        <>
        <div className="contato">
            <img src={imagem} className="imagem" alt="" />
            <div className="dados">
            <h3>{nome}</h3>
            <p>{email}</p>     
            <details>
                <summary>Detalhes</summary>
                <p>{descricao}</p>
            </details>
            </div>
            </div>
        </>
    )


}