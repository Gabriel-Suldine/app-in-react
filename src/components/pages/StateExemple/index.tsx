import './style.css'

export function StateExemple(){
    console.log("render")

    let name = 'sdsdd'
    let handleInput = event => { name = event.target.value    
    console.log("chamou")
    } 
    return(
        <>
        <input onInput={handleInput} className='inputName' type="text"/>
        <h1>{name}</h1>
        
        </>



    )
}