import './App.css';
import Company from './components/Company/Company';
import Counter from './components/Counter/Counter';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Unit Testing with Jest, RTL and Enzyme</h1>
      <p>Success</p>

      <Company name="Cognizant Technology Solutions Corporation"/>

      <hr/>
      <Counter />
    </div>
  );
}

export default App;
