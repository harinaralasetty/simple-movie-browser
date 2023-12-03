import logo from './logo.svg';
import './App.css';
import Greet from './components/greet'
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      
      <Greet name="Hari"/>
      <Counter plus_val={2}/>
    </div>
  );
}

export default App;
