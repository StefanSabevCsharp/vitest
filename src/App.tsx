
import './App.css'
import Counter from './components/Counter/Counter'
import Greeting from './components/Greeting/Greeting'
import ToDoList from './components/ToDoList/TODoList'
import UserProfile from './components/UserProfile/UserProfile'

function App() {

  return (
    <>
    <Greeting name= {"ivan"}/>
    <Counter />
    <UserProfile userId={5}/>
    <ToDoList />

    </>
  )
}

export default App
