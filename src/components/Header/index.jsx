import './index.css'
import Logo  from "../../assets/logo.png" 
import SearchButton from "../../assets/search.png" 
import CartButton from "../../assets/cart.png" 
import Menu from "../../assets/menu.png" 
import Close from "../../assets/close.png" 

export const Header = ({menu, setMenu, width}) => (
    <header className="Header">
        <div className="DefaultTemplate">
            <img src={Logo} />
            {
                width < 800 ? (
                    <div>
                        {
                            menu ? (
                                <div className="Menu">
                                    <img className='Button Close' src={Close} alt="" onClick={() => setMenu(!menu)} />
                                    <nav className="NavBar">
                                        <a href="">Loja</a>
                                        <a href="">Login</a>
                                        <a href="">Sobre</a>
                                        <a href="">Contato</a>
                                    </nav>
                                </div>
                            ): (
                                <img className='Button' onClick={() => setMenu(!menu)} src={Menu} alt="" />
                            )
                        }
                    </div>
                    
                ) : (
                    <div className="NavBar">
                        <nav >
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
                ) 
            }
        </div>
    </header>
)
