import './App.css';
import Navbar from './Components/navbar';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <section classname = "content">
          <div classname = "introduction">
            <h1> Hello, I'm Calvin!</h1> 
            <h2> Software Developer</h2>
          </div>
        </section>
    </div>
  );
}

export default App;
