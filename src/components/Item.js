import React from "react";

// envolví data en {} para destructurar el prop que envié desde APP
//ESTE ERA EL PUTO ERROR DE MIERDA, ME DESPIDO A LAS 5AM REACT BASURA ASQUEROSA.
function Item({ data }) {
  //paso data a una variable dentro del componente
  const item = data;

  if (item.length > 0) {
    return (
      <div className="card-group">
        <div className="row">
          {/* recorro mapeando cada item  */}
          {item.map((detalle, index) => {
            // let time = moment(detalle.global.latest_time, "MM-DD-YYYY");
            return (
              <div key={index} className="col-sm-6 col-lg-3 py-2">
                <div className="card border-info mb3">
                  <div className="card-body text-info">
                    {/* debido al map no necesito el index porque hara la acción N veces hasta el fin del largo del arreglo */}
                    <h5 className="card-title">{detalle.name}</h5>
                    <p className="card-text text-dark">
                      Precio : {detalle.global.latest}
                    </p>
                  </div>
                  <div className="card-footer">
                    <small className="text-warning">
                      Last updated : {detalle.global.latest_time}
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
    return item.map((detalle, index) => {
      return (
        <div className="card-group">
          <div className="row">
            <div key={index} className="col-sm-6 col-lg-3 py-2">
              <div className="card">
                <div className="card-body">
                  {/* debido al map no necesito el index porque hara la acción N veces hasta el fin del largo del arreglo */}
                  <h5 className="card-title">{detalle.nombre}</h5>
                  <p className="card-text">Precio : {detalle.precio}</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
}

export default Item;
// {item.map((detalle, index) => {
//   return (
//     <div className="card">
//       <img src="..." className="card-img-top" alt="..."/ />
//       <div className="card-body">
//         <h5 key={index} className="card-title">
//           {detalle.nombre}
//         </h5>
//       </div>
//       <div className="card-footer">
//         <small className="text-muted">Last updated 3 mins ago</small>
//       </div>
//     </div>

//   );
// })}
