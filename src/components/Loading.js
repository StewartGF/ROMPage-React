import React from "react";

function Loading({ mensaje }) {
  let porings = [
    { imagen: "imagenes/marin.gif" },
    { imagen: "imagenes/poring.gif" },
    { imagen: "imagenes/poporing.gif" },
    { imagen: "imagenes/angeling.gif" }
  ];
  //modificar el orden del array para mostrar las imagenes de distinta forma cada vez
  porings.sort(() => 0.5 - Math.random());
  return (
    <div className="container" style={{ zIndex: 3 }}>
      <div className="text-center">
        <div>{mensaje}</div>
        {porings.map((poring, index) => {
          return (
            <img
              key={index}
              src={poring.imagen}
              alt={index}
              style={{ width: "10%", height: "10%" }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Loading;
