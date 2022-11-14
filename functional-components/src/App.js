import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';
import Welcome from './component/Welcome';

function App() {
  return (
    <div className="App">
      <Greet name="Phuong" job="Accountant" >
        <p>This is my older sister</p>
      </Greet>
      <Greet name="Tung" job="Doctor" />
      <Greet name="Khanh" job="IT Engineer" />
      <Welcome name="Phuong" job="Accountant"></Welcome>
      <Welcome name="Tung" job="Doctor"></Welcome>
      <Welcome name="Khanh" job="IT Engineer"></Welcome>
    </div>
  );
}

export default App;
