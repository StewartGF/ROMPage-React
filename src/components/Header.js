import React, { useState } from "react";

function Header({ datosConsulta }) {
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
    <div className="d-flex justify-content-center">
      <nav className="navbar navbar-light bg-light">
        <form className="form-inline" onSubmit={consultarAPI}>
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
