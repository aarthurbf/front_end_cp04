import React, { useState } from 'react';
import Header from './components/Header';
import Home from './routes/Home';
import Produtos from './routes/Produtos';
import Contato from './routes/Contato';
import Sobre from './routes/Sobre';
import "./css/Global.css";

function App() {
    const [currentPage, setCurrentPage] = useState('home');

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <Home />;
            case 'produtos':
                return <Produtos />;
            case 'contato':
                return <Contato />;
            case 'sobre':
                return <Sobre />;
            default:
                return <Home />;
        }
    };

    return (
        <div>
            <Header onNavigate={setCurrentPage} />
            <main>
                {renderPage()}
            </main>
        </div>
    );
}

export default App;
