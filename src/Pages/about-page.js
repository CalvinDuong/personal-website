import './home-page.css';
import Navbar from '../components/navbar';

function AboutPage() {
  return (
    <div className="App">
        <Navbar/>
        <section className = "content">
          <div className = "introduction">
            <h1> About Me</h1> 
            <p> I am a software developer based in the United States. I have a passion for creating software applications and learning new technologies. I have experience with front-end and back-end development. I am always looking for new opportunities to grow and improve my skills. </p>
          </div>
        </section>
    </div>
  );
}

export default AboutPage;