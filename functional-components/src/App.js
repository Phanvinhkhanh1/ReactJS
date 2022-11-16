import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';
import Welcome from './component/Welcome';
import Message from './component/Message';
import Counter from './component/Counter';

function App() {
  return (
    <div className="App">
      <Counter />
      <Greet name="Phuong" job="Accountant" >
        <p>This is my older sister</p>
      </Greet>
      <Greet name="Tung" job="Doctor" />
      <Greet name="Khanh" job="IT Engineer" />
      <Welcome name="Phuong" job="Accountant"></Welcome>
      <Welcome name="Tung" job="Doctor"></Welcome>
      <Welcome name="Khanh" job="IT Engineer"></Welcome>
      <Message />
    </div>
  );
}

export default App;
