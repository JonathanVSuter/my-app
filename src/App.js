//import logo from './logo.svg';
import './App.css';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
import ParentComponent from './components/ParentComponent';
import EventBind from './components/EventBind';
import { UserGreeting } from './components/UserGreeting';
import NameList from './components/NameList';
function App() {
  return (
    <div className="App">
      {/* {/* <Greet name="Ibra" playerName="Teste">
        <h1>Filho</h1>
      </Greet> */}
      {/* <Greet name="Entra" playerName="Aqui">        
      </Greet> */}
      {/* <Message>        
      </Message> */}
      {/* <Counter></Counter> */}
      {/* <FunctionClick></FunctionClick>
      <ClassClick></ClassClick> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <UserGreeting></UserGreeting> */}
      <NameList></NameList>
    </div>
  );
}

export default App;
