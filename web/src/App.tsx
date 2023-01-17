import './styles/global.css';
import { Habit } from "./components/Habit"

function App() {
  return (
    <div  >
      <p>MENU PRINCIPAL</p>
      <Habit nome="habit 1"/>
      <Habit nome="habit 2"/>
      <Habit nome="habit 3"/>

      
    </div>
    
  )
  
}

export default App
