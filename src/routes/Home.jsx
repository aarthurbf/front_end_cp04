import "../css/Home.css";
import EntregaIcon from "../assets/estoque-pronto.png"
import VariedadeIcon from "../assets/caixas.png"
import DescontoIcon from "../assets/desconto.png"

function Home() {

  return (
    <>
      {/* BANNER */}
      <section className="banner">
        <h2>Venha conhecer os nossos produtos</h2>
        <h3>Lorem ipsum dolor sit amet.</h3>
        <a href="" className="btn">Conheça agora</a>
      </section>

      {/* SERVIÇOS */}
      <section className="informacoes">
        <h3>Vantagens</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, velit.</p>
        <hr />
        <ul className="item">
          <li>
            <img src={EntregaIcon} alt="" className="icon-home" />
            <h4>Entrega</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cupiditate atque aspernatur quam vel amet.</p>
          </li>
          <li>
            <img src={DescontoIcon} alt="" className="icon-home" />
            <h4>Ofertas</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cupiditate atque aspernatur quam vel amet.</p>
          </li>
          <li>
            <img src={VariedadeIcon} alt="" className="icon-home" />
            <h4>Variedade</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cupiditate atque aspernatur quam vel amet.</p>
          </li>
        </ul>
      </section>
    </>
  )
}

export default Home;