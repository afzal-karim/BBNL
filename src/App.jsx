
import Header from "./Components/Header"
import Board from "./Components/Board"
import Navbar from "./Components/Navbar"
import Card from "./Components/Card"
import Info from "./Components/Info"
import Ticker from "./Components/Ticker"
import Navigation from "./Components/Navigation"
import Panel from "./Components/Panel"
import Services from "./Components/Services"
import Foot from "./Components/Foot"
import Down from "./Components/Down"
import bg from "./assets/bg.jpg"


function App() {


  return (
    <>
    <div className="bg-cover bg-center " style={{ backgroundImage: `url(${bg})` }}>
      <Header />
      <Board />
      <Navbar />
      <Card />
      <Info />
      <Ticker />
      <Navigation />
      <Panel />
      <Services />
      <Foot />
      <Down />
      
      </div>
    </>
  )
}

export default App
