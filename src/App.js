import './App.css';
import Welcome from './Welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Custom Component */}
        <Welcome name="Vishesh" />
      </header>
    </div>
  );
}

export default App;
