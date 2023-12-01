import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/Navbar.jsx';
import { Banner } from './components/banner.jsx';
import { Skills } from './components/Skills.jsx';
import { Project } from './components/Project.jsx';
import { Footer } from './components/Footer.jsx';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Banner/>
      <Skills/>
      <Project/>
      <Footer/>
    </div>
  );
}

export default App
