import Basket from "../Basket/Basket";
import Card from "../Card/Card";
import "./Main.scss";

export default function Main({data, title}) {
  return (
    <main className="main">
        <div className="main__container">
            <Basket/>
            <section className="main__products">
                <h1 className="main__products-title">{title}</h1>
                <div className="main__products-wrapper">
                    {data.map((item, index) => (
                        <Card key={index} data={item} />
                    ))}
                </div>
            </section>
        </div>
    </main>
  )
}
