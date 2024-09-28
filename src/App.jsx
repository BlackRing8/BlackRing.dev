import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/Navbar.jsx";
import { Banner } from "./components/Banner.jsx";
import { Skills } from "./components/Skills.jsx";
import { Project } from "./components/Project.jsx";
import { Footer } from "./components/Footer.jsx";
import { LoaderHome } from "./Loaders/LoaderHome.jsx";
import { BannerV2 } from "./components/Banner_v2/BannerV2.jsx";

function App() {
  return (
    <div className="App">
      {/* <LoaderHome /> */}
      <NavBar />
      <BannerV2 />
      {/* <Skills />
      <Project />
      <Footer /> */}
    </div>
  );
}

export default App;
