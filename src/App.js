
import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Hero/>
    <div className="all-card">
    <Card name="Alex" img="women.jpg" price="148" place="Argentina"/>
    <Card name="Adam" img="women2.jpg" price="200" place="Israel"/>
    <Card name="Ady" img="women3.jpg" price="250" place="Iraq"/>
    <Card name="Annie" img="women4.jpg" price="100" place="India"/>
    <Card name="Becky" img="women5.jpg" price="290" place="Brazil"/>
    <Card name="Rabbie" img="women6.jpg" price="200" place="China"/>
    </div>
    </div>
  );
}

export default App;
