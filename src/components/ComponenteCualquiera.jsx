import React from "react";

const ComponenteCualquiera = () => {
  return (
    <>
      <div className="px-4 pt-5 my-5 text-center border-bottom">
        <h1 className="display-4 fw-bold">tacuautli</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Nuestras recetas recopilan los sabores mas exquisitos creados por maestros taqueros.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <a href="./Crud">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-sm-3"     
            >
             Quiero Tacos
            </button>
            </a>
            <a href="./UcampersInfo">
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Menu
            </button>
            </a>
          </div>
        </div>
        <div className="overflow-hidden" style={{ maxHeight: "70vh" }}>
          <div className="container px-5">
            <img
              src="hero.png"
              className="img-fluid border rounded-3 shadow-lg mb-4"
              alt="her are a delicious tacos"
              width={700}
              height={500}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ComponenteCualquiera;
