// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero/hero"
import Features from "./components/Features/feature"
import About from "./components/About/about"
import Review from "./components/Review/review"
import Reason from "./components/Reason/reason"
import Contact from "./components/Contact/contact"
import Banner from "./components/Banner/banner"
import Footer from "./components/Footer/footer"
import Header from "./components/Hero/Header"
import BackToTopBtn from "./components/BackToTopBtn"


function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Features/>
      <Review/>
      <Reason/>
      <About/>
      <Contact/>
      <Banner/>
      <Footer/>
      <BackToTopBtn/>
    </div>
  );
}

export default App;
