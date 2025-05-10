export default function Pizza({ pizzaObj }) {
  if (!pizzaObj.isactive) {
    return null;
  }

  return (
    <div className="col">
      <div className="card">
        <img
          src="/img/pizza.jpg"
          alt="logo"
          className="card-img-top p-2 p-md-3 border-bottom"
        />
        <div className="card-body">
          <h3 className="card-title"> {pizzaObj.title} </h3>
          <p className="card-text"> {pizzaObj.description} </p>
          <span className={`badge ${ pizzaObj.price>=200 ?"text-bg-primary":"text-bg-danger"}`} > {pizzaObj.price} </span>
        </div>
      </div>
    </div>
  );
}
