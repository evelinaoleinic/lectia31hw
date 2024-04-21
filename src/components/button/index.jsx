import { Children } from 'react'
import './style.css'
const Button = ({onClick, ...props})=>{
    return <button className='addBtn'onClick={onClick}{...props}/>
}
export default Button