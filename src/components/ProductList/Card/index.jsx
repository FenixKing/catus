import "./index.css"
export const Card = ({img, price, installments}) => (
    <li>
        <div className="CardHead">
            <img src={img} alt="" />
            <h3>Aliquam congue nisl ele ac ligula convallis, luctus blandit augue.</h3>
        </div>
        <div className="CardBody">
            <span>de R$ 582,90</span>
            <h2><strong>{price}</strong></h2>
            <h3><strong>5x</strong> de <strong>{installments}</strong> sem juros</h3>
        </div>

        <button style={{borderRadius: '4px', padding: "20px", background: "#A4BEBF"}}>Adicionar ao carrinho</button>
    </li>
)