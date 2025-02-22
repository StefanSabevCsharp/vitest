
import './App.css'
import Counter from './components/Counter/Counter'
import Greeting from './components/Greeting/Greeting'
import UserProfile from './components/UserProfile/UserProfile'

function App() {

  return (
    <>
    <Greeting name= {"ivan"}/>
    <Counter />
    <UserProfile username={"ivan"} email={"ivan@gmail.com"}/>
    </>
  )
}

export default App
