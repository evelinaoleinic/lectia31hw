import './style.css'

const DeleteBtn = ({children, onClick,...props})=>{
    return <button className='deleteBtn' onClick={onClick}>{children}</button>
}
export default DeleteBtn