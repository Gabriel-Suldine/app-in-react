import { useState } from "react";
import { movies } from "./data"
import './style.css'
export function Gallery() {
    const [index, setIndex] = useState(0);

    let movie = movies[index]
    function handleClickMore() {
        if (index >= 14) {
            setIndex(14)
        } else {
            setIndex(index + 1)
        }
    }
    function handleClickLess() {
        if (index <= 0) {
            setIndex(0)
        } else {
            setIndex(index - 1)
        }
    }
    return (
        <>
        <div className="centralizar">
            <section className="gallery">
                <img src={movie.images.poster} />
            </section>

            <div className="details">
                <h1>{movie.title}</h1>
                <details>
                    <summary>Descrição</summary>
                    <p>{movie.synopsis}</p>
                </details>
                <p>DURAÇÃO: {movie.duration}</p>
                <p>CLASSIFICAÇÃO DE IDADE: {movie.parentalRating}</p>
            </div>

            <div className="buttons">
                <button onClick={handleClickLess} >Anterior</button>
                <button onClick={handleClickMore}>Próxima</button>
            </div>

            </div>
        </>
    )
}


