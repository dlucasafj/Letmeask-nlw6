import {ButtonHTMLAttributes} from 'react'
import '../styles/Button.scss';
// Criar propriedades em forma de obj

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>
export function Button(props:ButtonProps){
    return(
        <button className='button' {... props}></button>
    )
}