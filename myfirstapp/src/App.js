 
import './App.css';
import Btn from "./components/buttonn/button"
import Formm from "./components/buttonn/form/form"
import Hed,{Hedingcompnt2 as Raju,Hedingcompnt3} from './components/heading/heading';
import { Greetings } from './components/greetings/greetings';
import { Todolist } from './components/todo-list/todolist';

 function App() {
  
  return(
    <div>  
        {/* <Btn/>
        <Formm/>
        <Hed/>
        <Raju/>
        <Hedingcompnt3/> */}
        <Greetings/>
        <Todolist/>
    </div>
   
 
  )
  
 }

export default App;
