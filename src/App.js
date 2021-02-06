
import './App.css';
import { Router,Link } from "@reach/router";
import Title from "./components/Title"
import Navigation from "./components/Navigation"
import MainSection from "./components/MainSection"
import ScrollBtns from "./components/ScrollBtns"
import Photo from "./components/Photo"
import IconFooter from "./components/IconFooter"



function App() {
  return (
    <div className="App">
    <section className="main">
    <Navigation />
    <MainSection/>
    <Router>
        <Title path="/"/>
    </Router>
    <Photo/>
    <IconFooter/>
    <ScrollBtns/>



     </section>
    </div>
  );
}

export default App;
