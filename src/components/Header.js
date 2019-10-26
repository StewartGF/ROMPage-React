import React, { useState } from "react";

function Header({ datosConsulta }) {
  const bgStyle = {
    border: "1px solid rgb(30,30,46)",
    background: "rgb(30,30,46)"
  };
  /***
   * State del componente
   * searchQ : state
   * setSearchQ: setState del componente
   */
  const [Busqueda, setBusqueda] = useState({
    texto: ""
  });

  const handleChange = evento => {
    setBusqueda({
      ...Busqueda,
      [evento.target.name]: evento.target.value
    });
    datosConsulta(Busqueda);
  };

  const consultarAPI = evento => {
    evento.preventDefault();
    //entrega Busqueda al App.
    datosConsulta(Busqueda);
  };
  return (
    <div className="d-flex justify-content-center" style={bgStyle}>
      <nav className="navbar " style={bgStyle}>
        <form
          className="form-inline"
          onSubmit={consultarAPI}
          style={{
            border: "1px solid rgb(30,30,46)",
            background: "rgb(30,30,46)"
          }}
        >
          <input
            className="form-control mr-sm-2"
            type="search"
            name="texto"
            placeholder="Buscar"
            aria-label="Buscar"
            onChange={handleChange}
          />
          <button className="btn btn-outline-info my-2 my-sm-0" type="submit">
            Buscar
          </button>
        </form>
      </nav>
    </div>
  );
}
export default Header;
