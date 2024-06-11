import './index.css'
import Logo  from "../../assets/logo.png" 
import SearchButton from "../../assets/search.png" 
import CartButton from "../../assets/cart.png" 

export const Header = () => (
    <header className="Header">
        <div className="DefaultTemplate">
            <img src={Logo} />
            <nav className="NavBar">
                <a href="">Loja</a>
                <a href="">Login</a>
                <a href="">Sobre</a>
                <a href="">Contato</a>
            </nav>
            <div className="BlockSearch">
                <div className="Search">
                    <input type="text" placeholder="Digite aqui sua busca"/>
                    <img src={SearchButton} />
                </div>
                <div className="Cart">
                    <img src={CartButton} />
                </div>
            </div>
        </div>
    </header>
)
