import './home-page.css';
import Navbar from '../components/navbar';
import avatar from '../Images/calvin-avatar.png'

function HomePage() {
  return (
    <div className="App">
        <Navbar/>
        <section className = "content">
          <div className = "introduction">
            <img src = {avatar} width = "300" height = "300"></img>
            <h1> Hello, I'm Calvin!</h1> 
            <h2 className = "description">Software Developer</h2>
          </div>
        </section>
    </div>
  );
}

export default HomePage;
