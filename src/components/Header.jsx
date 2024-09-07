import "../css/Header.css";

function Header({ onNavigate }) {
    return (
        <>
            <section className="header">
                <h1><a href="#" onClick={() => onNavigate('home')}>GoAthlete</a></h1>
                <nav className="header-menu">
                    <ul>
                        <li><a href="#" onClick={() => onNavigate('home')}>Home</a></li>
                        <li><a href="#" onClick={() => onNavigate('produtos')}>Produtos</a></li>
                        <li><a href="#" onClick={() => onNavigate('contato')}>Contato</a></li>
                        <li><a href="#" onClick={() => onNavigate('sobre')}>Sobre</a></li>
                    </ul>
                </nav>
            </section>
        </>
    );
}

export default Header;
