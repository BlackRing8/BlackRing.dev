import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/Navbar.jsx';
import { Banner } from './components/Banner.jsx';
import { Skills } from './components/Skills.jsx';
import { Project } from './components/Project.jsx';
import { Footer } from './components/Footer.jsx';
import { LoaderHome } from './Loaders/LoaderHome.jsx';


function App() {
  return (
    <div className='App'>
      <LoaderHome/>
      <NavBar />
      <Banner/>
      <Skills/>
      <Project/>
      <Footer/>
    </div>
  );
}

export default App
