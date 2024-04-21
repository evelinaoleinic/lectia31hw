import './style.css'
const Input=({...props})=>{
    return <input className='input' {...props} /> // automat toate arg sunt transmise ca props, {}

}
export default Input