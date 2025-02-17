import './App.css';
import Input from './components/Input';


function App() {
  return (
    <div className="App">
      <Input label="Input" placeholder="Placeholder" required={false} error={false} warning={false} helperText="" />
    </div>
  );
}

export default App;
