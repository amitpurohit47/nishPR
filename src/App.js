import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Aboutus from "./components/Aboutus/Aboutus";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Home />
      <Aboutus />
      <Footer />
    </div>
  );
}

export default App;
