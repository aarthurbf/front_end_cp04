import "../css/Home.css";
import EntregaIcon from "../assets/estoque-pronto.png"
import VariedadeIcon from "../assets/caixas.png"
import DescontoIcon from "../assets/desconto.png"
import Estrela from "../assets/star.png"
import FaceOne from "../assets/face1.jpg"
import FaceTwo from "../assets/face2.jpg"
import FaceThree from "../assets/face3.jpg"

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

      {/* AVALIAÇÃO */}
      <section className="testimonials">
        <div className="inner">
          <h1>Avaliações</h1>
          <div className="border"></div>
          <div className="row">
            <div className="col">
              <div className="testimonial">
                <img src={FaceOne} alt="" />
                <div className="name">Júlia</div>
                <div className="stars">
                  <img src={Estrela} alt="" />
                  <img src={Estrela} alt="" />
                  <img src={Estrela} alt="" />
                  <img src={Estrela} alt="" />
                  <img src={Estrela} alt="" />
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </p>
              </div>
            </div>

            <div className="col">
              <div className="testimonial">
                <img src={FaceTwo} alt="" />
                <div className="name">Roberto</div>
                <div className="stars">
                  <img src={Estrela} alt="" />
                  <img src={Estrela} alt="" />
                  <img src={Estrela} alt="" />
                  <img src={Estrela} alt="" />
                  <img src={Estrela} alt="" />
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </p>
              </div>
            </div>

            <div className="col">
              <div className="testimonial">
                <img src={FaceThree} alt="" />
                <div className="name">Lucas</div>
                <div className="stars">
                  <img src={Estrela} alt="" />
                  <img src={Estrela} alt="" />
                  <img src={Estrela} alt="" />
                  <img src={Estrela} alt="" />
                  <img src={Estrela} alt="" />
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;