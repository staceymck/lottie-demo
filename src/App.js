import logo from './logo.svg';
import './App.css';
import CirclePulseAuto from './components/CirclePulseAuto';
import CirclePulseControl from './components/CirclePulseControl';

function App() {

  return (
    <div className="app">
      <h1>Lottie Demo</h1>
      <div className="lotties">
        <CirclePulseAuto />
        <CirclePulseControl />
      </div>
    </div>
  );
}

export default App;
