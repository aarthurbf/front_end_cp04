import "../css/Produtos.css";
import Produto1 from "../assets/produto1.png";
import Produto2 from "../assets/produto2.png";
import Produto3 from "../assets/produto3.png";
import Produto4 from "../assets/produto4.png";
import Produto5 from "../assets/produto5.png";
import Produto6 from "../assets/produto6.png";
function Produtos() {

  return (
    <>
      <h2 className="produto-title">Produtos</h2>
      <div className="produto-list">
        <div className="produto-item">
          <img src={Produto1} alt="" />
          <h3>Lorem, ipsum.</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, maiores?</p>
          <a href="" className="btn">Comprar</a>
        </div>

        <div className="produto-item">
          <img src={Produto2} alt="" />
          <h3>Lorem, ipsum.</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, maiores?</p>
          <a href="" className="btn">Comprar</a>
        </div>

        <div className="produto-item">
          <img src={Produto3} alt="" />
          <h3>Lorem, ipsum.</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, maiores?</p>
          <a href="" className="btn">Comprar</a>
        </div>

        <div className="produto-item">
          <img src={Produto4} alt="" />
          <h3>Lorem, ipsum.</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, maiores?</p>
          <a href="" className="btn">Comprar</a>
        </div>

        <div className="produto-item">
          <img src={Produto5} alt="" />
          <h3>Lorem, ipsum.</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, maiores?</p>
          <a href="" className="btn">Comprar</a>
        </div>

        <div className="produto-item">
          <img src={Produto6} alt="" />
          <h3>Lorem, ipsum.</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, maiores?</p>
          <a href="" className="btn">Comprar</a>
        </div>
      </div>
    </>
  )
}

export default Produtos;