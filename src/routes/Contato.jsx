import "../css/Contato.css"
function Contato() {

  return (
    <>
      {/* CADASTRO */}
      <section className="cadastro">
        <h3>Entre em contato conosco</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti suscipit, commodi quo molestias sapiente optio est amet aliquid reprehenderit explicabo?</p>

        <form name="cadastro" id="cadastro" method="post" action="">
          <input type="text" placeholder="Sua mensagem"/>
            <button type="submit" name="button">Enviar</button>
        </form>
      </section>
    </>
  )
}

export default Contato;