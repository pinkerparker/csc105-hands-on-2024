import Home from "./pages/home";
import Navbar from "./pages/navbar";
import Gallery from "./pages/gallery";
import AboutMe from "./pages/aboutme";

function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <AboutMe/>
      <Gallery/>
    </div>
  );
}

export default App;