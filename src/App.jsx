import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./routes/Home";
import Produtos from "./routes/Produtos";
import "./css/Global.css";

function App() {

  return (
    <>
      <Header/>
      <Home/>
      <Produtos/>
      <Footer/>
    </>
  )
}

export default App
