import React from "react";

// envolví data en {} para destructurar el prop que envié desde APP
function Item({ data }) {
  //paso data a una variable dentro del componente
  const item = data;

  if (item.length > 1) {
    return (
      <div className="card-group">
        <div className="row">
          {/* recorro mapeando cada item  */}
          {item.map((detalle, index) => {
            let hora = new Date(detalle.global.latest_time);
            let precioFormateado =
              detalle.global.latest
                .toString()
                .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + " Zeny";
            return (
              <div key={index} className="col-sm-6 col-lg-3 py-2">
                <div className="card border-info mb3">
                  <div className="card-body text-info">
                    {/* debido al map no necesito el index porque hara la acción N veces hasta el fin del largo del arreglo */}
                    <h5 className="card-title">{detalle.name}</h5>
                    <p className="card-text text-dark">
                      Precio : {precioFormateado}
                    </p>
                  </div>
                  <div className="card-footer">
                    <small className="text-warning">
                      Última Actualización :{" "}
                      {hora.toLocaleString().slice(0, -3)}
                    </small>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } //fin if
  else {
    return (
      <div className="card-group">
        <div className="row">
          {/* recorro mapeando cada item  */}
          {item.map((detalle, index) => {
            let hora = new Date(detalle.global.latest_time);
            let precioFormateado =
              detalle.global.latest
                .toString()
                .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + " Zeny";
            return (
              <div
                key={index}
                className="col-sm-6 col-lg-3 py-2"
                style={{ minWidth: "100%" }}
              >
                <div className="card border-info mb3">
                  <div className="card-body text-info">
                    {/* debido al map no necesito el index porque hara la acción N veces hasta el fin del largo del arreglo */}
                    <h5 className="card-title">{detalle.name}</h5>
                    <p className="card-text text-dark">
                      Precio : {precioFormateado}
                    </p>
                  </div>
                  <div className="card-footer">
                    <small className="text-warning">
                      Última Actualización :{" "}
                      {hora.toLocaleString().slice(0, -3)}
                    </small>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Item;
