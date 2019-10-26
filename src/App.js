import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Item from "./components/Item";
import Loading from "./components/Loading";

function App() {
  const [search, setSearch] = useState("");
  const [resultado, setResultado] = useState([]);

  const [error, setError] = useState(false);
  //let arrayData = [];
  useEffect(() => {
    // if (search === "") {
    setError(true);
    //  return;
    //}

    const consultaAPI = async () => {
      let url = `https://www.romexchange.com/api?item=${search}&exact=false&sort_server=global&slim=true`;
      const respuesta = await fetch(url);
      const data = await respuesta.json();
      // let dataNombre = data.map(data => {
      //   return data.name;
      // });
      // let dataPrecio = data.map(data => {
      //   return data.global.latest;
      // });
      /**ESTO LO HICE POR QUE NO HICE LO DE DESTRUCTURAR LA DATA EN EL COMPONENTE ITEM
       * EN CASO DE QUE DEJE DE FUNCIONAR DESCOMENTAR ESTO Y USARLO PASANDO POR PROP ARRAYDATA AL COMPONENTE ITEM
       */
      // Object.entries(dataNombre).forEach((data, index) => {
      //   arrayData.push({
      //     nombre: dataNombre[index],
      //     precio: dataPrecio[index]
      //   });
      // });
      // console.log(arrayData);
      //cambiar data por arrayData
      setResultado(data);

      setError(false);
    };

    consultaAPI();
  }, [search]);

  const datosConsulta = datos => {
    setSearch(datos.texto);
  };

  //montar y desmontar el container con items
  let componente;
  if (error) {
    //hay error, desmontar container
    componente = <Loading mensaje="Cargando..."></Loading>;
  } else if (resultado.length > 0) {
    //montar container
    componente = <Item data={resultado}></Item>;
  }

  return (
    <div>
      <Header datosConsulta={datosConsulta} />
      <div className="container">
        <div className="row">{componente}</div>
      </div>
    </div>
  );
}

export default App;
