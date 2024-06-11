import "./index.css"
import { Card } from "./Card"
import Banner1 from "../../assets/banner01.png"
import Banner2 from "../../assets/banner02.png"
import Banner3 from "../../assets/banner03.png"
import Banner4 from "../../assets/banner04.png"
import Banner5 from "../../assets/banner05.png"

export const Banner = () =>(
    <section className="Banner">
        <div>
            <ul>
                <Card img={Banner1}/>
                <Card img={Banner2}/>
            </ul>
            <ul>
                <Card img={Banner3}/>

            </ul>
            <ul>
                <Card img={Banner4}/>
                <Card img={Banner5}/>
            </ul>
        </div>
    </section>
)