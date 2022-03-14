import './App.css';
import Header from './Components/Header';
import './normalize.css';
import Section from './Components/Section';
import Article from './Components/Article';
import Hero from './Components/Hero';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="container-fluid">
     <Header />
     <Section />
     <Article />
     <Hero />
     <Footer />
    </div>
  );
}

export default App;
