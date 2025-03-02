import Basket from "../Basket/Basket";
import Card from "../Card/Card";

export default function Main({data, title}) {
  return (
    <main className="main">
        <div className="main__container">
            <Basket/>
            <section className="page__products">
                <h1 className="page__products-title">{title}</h1>
                <div className="page__products-wrapper">
                    {data.map((item, index) => (
                        <Card key={index} data={item} />
                    ))}
                </div>
            </section>
        </div>
    </main>
  )
}
