
import './App.css';
import scope from "./img/icons/scope.svg"
import friendly from "./img/icons/friendly.svg"
import joystic from "./img/icons/joystic.svg"
import twitch from "./img/icons/twitch.svg"
import csgo from "./img/csgo.jpg"
import dota2 from "./img/dota2.jpg"
import apex from "./img/apex.jpg"
import Header from './components/Header';
import Main from './components/Main';
import About from "./components/About";
import Game from "./components/Game"
import Info from './components/Info';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Header />

      <Main />
      <About />
      <Game />
      <Info />

      <Contact />



    </>
  );
}

export default App;
