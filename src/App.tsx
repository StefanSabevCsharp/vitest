
import './App.css'
import Counter from './components/Counter/Counter'
import Greeting from './components/Greeting/Greeting'
import ToDoList from './components/ToDoList/TODoList'
import ButtonToggle from './components/Toggle/Toggle'
import UserList from './components/UserList/UserList'
import UserProfile from './components/UserProfile/UserProfile'

function App() {

  return (
    <>
    <Greeting name= {"ivan"}/>
    <Counter />
    <UserProfile userId={5}/>
    <ToDoList />
    <ButtonToggle/> 
    <UserList/>

    </>
  )
}

export default App
