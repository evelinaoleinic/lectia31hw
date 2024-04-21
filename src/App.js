import { useState } from 'react';
import Title from './components/title'
import Typography from './components/title';
import Input from './components/input';
import Button from './components/button';
import Form from './components/form'
import DeleteBtn from './components/deleteBtn';


function App() {
const [toDos, setToDos] = useState([]) //array pentru ca lista de to-do va fi u narray
const[inputValue, setInputValue]=useState('') // valoarea in input este string

// gestionneaza eventul onChange, atunci cand se introduce ceva nou in input
function handleChangeInput(event){ //event e obiectul event care e introdus ca argument
  
  setInputValue(event.target.value) // este valoarea introdusă sau modificată de către utilizator în câmpul de intrare și este utilizată pentru a actualiza starea inputValue
}
//facem functia addtodo care se apeleaza cand userul apasa butonul submit
function addToDo(){
  setToDos([...toDos, inputValue]) //aici se adauga noua sarcina in lista 
  setInputValue('')

}
//functia de a sterge todo din lsta noastra
function handleDeleteToDo(text){ //primeste ca arg elementul pe care il vrem sters
  const newToDos=toDos.filter(toDo=>toDo !==text)
  setToDos(newToDos) //actualizam noua lista fara acel element

}

  return (
    <div>
      <Typography title='Lista de to-do' tag='h1' className='title' />
      <Form title={addToDo} tag='p' value={inputValue} onChange={handleChangeInput} placeholder='adauga to do' buttonAction={addToDo} buttonTitle='Adauga to do'/> 
        {/* //* <Input type='text' value={inputValue}  onChange={handleChangeInput} placeholder='adauga de facut'/>
        <Button onClick={addToDo}>Adauga to-do </Button> */} 
      {/* </Form> */}
      <ul>
        {toDos.map((toDo)=>( //merge prin fiecare element din array todo si il returneaza ca un element li
          //prin key noi ii dam o valoare unica elementului li care este valoarea todo
          <li key={toDo}>{toDo}
          <DeleteBtn onClick={()=>{
            handleDeleteToDo(toDo)
          }

          }>Sterge</DeleteBtn>
          </li>
          //fiecare element li va avea bitonul delete
        ))}
      </ul>
    </div>
  )
}

export default App;
