import Button from '../button'
import Input from '../input'
import Typography from '../title'
import './style.css'

const Form=({title,tag,inputValue, onChange,placeholder,buttonTitle, buttonAction})=>{
    return (
    <div className='form'>
        <div>
        <Typography title={title} tag={tag}/>
        <Input value={inputValue} onChange={onChange} placeholder={placeholder}/></div>
        <Button onClick={buttonAction}>{buttonTitle}</Button>
    </div>
    )
}
export default Form