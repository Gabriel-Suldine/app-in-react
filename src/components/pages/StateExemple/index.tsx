import { useState } from 'react'
import './style.css'

export function StateExemple() {
    console.log("render")

    const [name, setName] = useState("")
    let handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
        console.log("chamou")
    }
    return (
        <>
            <h1>StateExample</h1>
            <input onInput={handleInput} placeholder="Digite aqui" className='inputName' type="text" />
            <h1>{name}</h1>
        </>



    )
}