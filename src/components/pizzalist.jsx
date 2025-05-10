import Pizza from "./pizza";
import { pizzas } from "../data";
export default function Pizzalist() {
  return (
    <div className="pizza-list">
      <h2>Pizza list</h2>
      <div className="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-4">
        {pizzas.length > 0 ? (
          pizzas.map((p, index) => <Pizza pizzaObj={p} key={index} />)
        ) : (
          <p>Sayfada icerik yok</p>
        )}
      </div>
    </div>
  );
}
