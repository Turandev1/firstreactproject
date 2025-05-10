import Navbar from "./components/navbar";
import Pizzalist from "./components/pizzalist";
import Footer from "./components/footer";
import Events from "./components/events";
import State from "./components/state";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Pizzalist />
        <Events />
        <State/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
