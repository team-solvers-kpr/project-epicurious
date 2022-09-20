import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home/Home";
import Signin from "./components/pages/Register/Signin";
import SignUp from "./components/pages/SignUp/SignUp";
import Video from "./components/pages/Video/Video";
import Footer from "./components/sharedPage/Footer";
import Navbar from "./components/sharedPage/Navbar";
import NotFound from "./components/sharedPage/NotFound";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/videos" element={<Video></Video>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/signin" element={<Signin></Signin>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
