import "../css/styles.css";
import Hero from "./Hero";
import Nav from "./Nav";
import About from "./About";
import Services from "./Services";
import Tours from "./Tours";
import Footer from "./Footer.js";
function App() {
  return (
    <div className="App">
      <div>
        <Nav></Nav>
        <Hero></Hero>
        <About></About>
        <Services></Services>
        <Tours></Tours>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
