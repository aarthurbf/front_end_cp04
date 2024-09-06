import "../css/Home.css";

function Home() {

  return (
    <>
      {/* BANNER */}
      <section className="banner">
        <h2>Venha conhecer o paraíso</h2>
        <h3>Lorem ipsum dolor sit amet.</h3>
        <a href="" className="btn">Informações</a>
      </section>

      {/* SERVIÇOS */}
      <section className="informacoes">
        <h3>Lorem ipsum dolor sit amet.</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, velit.</p>
        <hr/>
          <ul className="item">
            <li>
              <h4>Localização</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cupiditate atque aspernatur quam vel amet.</p>
            </li>
            <li>
              <h4>Pacotes e ofertas</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cupiditate atque aspernatur quam vel amet.</p>
            </li>
            <li>
              <h4>Acomodações</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cupiditate atque aspernatur quam vel amet.</p>
            </li>
          </ul>
      </section>
    </>
  )
}

export default Home;