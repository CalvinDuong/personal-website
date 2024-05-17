import './App.css';
import Navbar from './Components/navbar';

function App() {
    return (
        <div className="App">
            <Navbar/>
            <section className = "content">
            <div className = "introduction">
                <h1> Hello, I'm Calvin!</h1> 
                <h2 className = "description">Software Developer</h2>
            </div>
            </section>
        </div>
    );
}