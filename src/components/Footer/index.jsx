import "./index.css"
import SeloLojaProtegida from "../../assets/selo_lojaprotegida.png"
import Frame from "../../assets/frame.png"
import Frame1 from "../../assets/frame1.png"

export const Footer = () => (
    <footer className="">
        <div className="DefaultTemplate">
            <div className="Footer">
                <section>
                    <h2>Central de Atendimento</h2>
                    <div className="Bar">
                        <div />
                    </div>
                    <div className="Faq">
                        <p>Ajuda e suporte</p>
                        <p>Fale conosco</p>
                        <p>Faq</p>
                    </div>
                    <p className="Whatsapp">Whatsapp: (11) 99999-9999</p>
                    <div className="Time">
                        <span>Nossos horários</span>
                        <p>Segunda a sexta das 9h às 18h</p>
                    </div>
                </section>
                <section>
                    <h2>Selos de Segurança</h2>
                    <div className="Bar">
                        <div/>
                    </div>
                    <ul>
                        <li>
                            <img src={Frame} alt="" />
                        </li>
                        <li>
                            <img src={SeloLojaProtegida} alt="" />
                        </li>
                    </ul>
                </section>
                <section>
                    <h2>Formas de Pagamento</h2>
                    <div className="Bar">
                        <div/>
                    </div>
                    <ul>
                        <li>
                            <img src={Frame1} alt="" />
                        </li>
                    </ul>
                </section>
            </div>
            </div>
    </footer>
)