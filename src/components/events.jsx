import { pizzas } from "../data";

export default function State() {
  // function handleprevclick () {
  //   alert("geri butonu")
  // }

  let index = 0;
  let pizza = pizzas[index];

  function handlepreviousclick() {
    index = index - 1;
    console.log(index);
  }
  function handlenextclick() {
    index = index + 1;
    console.log(index);
  }

  return (
    <>
      <div className="m-5 p-5">
        <div className="container mt-4">
          <h1>Events</h1>
          <button
            className="btn btn-primary m-2"
            // onClick={() => {
            //   alert("geri butonu");
            // }} //bele de edile biler
            onClick={handlepreviousclick}
          >
            previous
          </button>
          <button className="btn btn-primary" onClick={handlenextclick}>
            {" "}
            next
          </button>
          <div className="card">
            <img
              src="/img/pizza.jpg"
              alt="logo"
              className="card-img-top p-2 p-md-3 border-bottom"
            />
            <div className="card-body">
              <h3 className="card-title"> {pizza.title} </h3>
              <p className="card-text"> {pizza.description} </p>
              <span
                className={`badge ${
                  pizza.price >= 200 ? "text-bg-primary" : "text-bg-danger"
                }`}
              >
                {" "}
                {pizza.price}{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
