import React from "react";
import Grafico from "./Grafico";

// envolví data en {} para destructurar el prop que envié desde APP
function Item({ data }) {
  //paso data a una variable dentro del componente
  const item = data;
  const bgc = {
    background: "rgb(232, 232, 232)"
  };
  const borderStyle = {
    border: "2.5px solid rgb(161,21,80)"
  };
  const fontCard = {
    color: "rgb(161,21,80)"
  };
  const fontActualizacion = {
    color: "rgb(39,41,1)",
    fontSize: "11px"
  };
  if (item.length > 2) {
    return (
      <div className="card-group">
        <div className="row">
          {/* recorro mapeando cada item  */}
          {item.map((detalle, index) => {
            let chartPrecios = [];
            let chartFechas = [];
            let hora = new Date(detalle.global.latest_time);
            let precioFormateado =
              detalle.global.latest
                .toString()
                .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + " Zeny";
            return (
              <div key={index} className="col-sm-6 col-lg-3 py-2">
                <div className="card mb3" style={(borderStyle, bgc)}>
                  <div className="card-body" style={fontCard}>
                    {/* debido al map no necesito el index porque hara la acción N veces hasta el fin del largo del arreglo */}
                    <h5 className="card-title">{detalle.name}</h5>
                    <p className="card-text text-dark">
                      Precio : {precioFormateado}
                    </p>
                  </div>
                  <div className="card-footer">
                    <small style={fontActualizacion}>
                      Última Actualización :{" "}
                      {hora.toLocaleString().slice(0, -3)}
                      <br></br>
                      {detalle.global.week.data.map((data, index) => {
                        chartPrecios.push(data.price);
                        let fecha = new Date(data.time);
                        let trimmed = fecha.toLocaleString().slice(0, -13);
                        chartFechas.push(trimmed);
                      })}
                    </small>
                  </div>

                  <Grafico
                    precios={chartPrecios}
                    fechaLabel={chartFechas}
                  ></Grafico>
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
            let chartPrecios = [];
            let chartFechas = [];
            let hora = new Date(detalle.global.latest_time);
            let precioFormateado =
              detalle.global.latest
                .toString()
                .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + " Zeny";
            return (
              <div
                key={index}
                className="col-sm-4 col-lg-4 py-2"
                style={{ minWidth: "100%" }}
              >
                <div className="card mb3" style={borderStyle}>
                  <div className="card-body" style={fontCard}>
                    {/* debido al map no necesito el index porque hara la acción N veces hasta el fin del largo del arreglo */}
                    <h5 className="card-title">{detalle.name}</h5>
                    <p className="card-text text-dark">
                      Precio : {precioFormateado}
                    </p>
                  </div>
                  <div className="card-footer">
                    <small style={fontActualizacion}>
                      Última Actualización :{" "}
                      {hora.toLocaleString().slice(0, -3)}
                      <br></br>
                      {detalle.global.week.data.map((data, index) => {
                        // let format = data.price
                        //   .toString()
                        //   .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                        chartPrecios.push(data.price);
                        let fecha = new Date(data.time);
                        let trimmed = fecha.toLocaleString().slice(0, -13);
                        chartFechas.push(trimmed);
                      })}
                    </small>
                  </div>

                  <Grafico
                    precios={chartPrecios}
                    fechaLabel={chartFechas}
                  ></Grafico>
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
