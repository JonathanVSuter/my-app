import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      {/* <Greet name="Ibra" playerName="Teste">
        <h1>Filho</h1>
      </Greet>
      <Greet name="Entra" playerName="Aqui">
        <button>Entrada no seu cú</button>
      </Greet> */}
      {/* <Message>        
      </Message> */}
      <Counter></Counter>
    </div>
  );
}

export default App;
