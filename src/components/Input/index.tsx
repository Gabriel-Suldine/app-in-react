import './style.css'

type InputProps = {
    type: string,
    placeholder: string
}

export function Input(props: InputProps) {
    return (
        <input className='Input' type={props.type} placeholder={props.placeholder} />
    )
}