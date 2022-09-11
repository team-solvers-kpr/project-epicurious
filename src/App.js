import "./App.css";
import Home from "./components/pages/Home/Home";
import Footer from "./components/sharedPage/Footer";
import Navbar from "./components/sharedPage/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
