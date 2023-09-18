import "./styles.css";

export default function App() {
  function Close() {
    const divToHide = document.getElementById("Story");
    divToHide.style.display = "none";
  }

  function Close1() {
    const divToHide = document.getElementById("Story1");
    divToHide.style.display = "none";
  }

  function Close2() {
    const divToHide = document.getElementById("Story2");
    divToHide.style.display = "none";
  }

  function Close3() {
    const divToHide = document.getElementById("Story3");
    divToHide.style.display = "none";
  }

  return (
    <div className="App">
      <h1 className="Tite">My News Feed</h1>

      <div className="Story" id="Story">
        <div className="Story-Head">
          <div>
            <img
              className="image"
              src="https://placehold.co/600x400?text=News+Story"
              alt="Img"
            ></img>
          </div>
          <div className="ByTitle">
            <h1>
              <a href="https://cleantechnica.com/2022/02/14/tesla-shanghai-capacity-will-exceed-1-million-cars-in-2022-byd-blade-batteries-coming/">
                Tesla's Giga Shanghai is expanding and will soon be able to
                manufacture more than 1 million cars a year.
              </a>
            </h1>
            <span className="ByLine">By: Steve Hanley </span>
          </div>
        </div>
        <p className="descrip">
          Tesla's Giga Shanghai is expanding and will soon be able to
          manufacture more than 1 million cars a year.
        </p>
        <p className="X" onClick={Close}>
          x
        </p>
      </div>

      <div className="Story" id="Story1">
        <div className="Story-Head">
          <div>
            <img
              className="image"
              src="https://www.milenio.com/uploads/media/2022/02/13/elon-musk-estimo-deuda-unidos.jpeg"
              alt="Img"
            ></img>
          </div>
          <div className="ByTitle">
            <h1>
              <a href="https://www.milenio.com/negocios/elon-musk-deuda-eu-60-billones-dolares">
                Elon Musk asegura que la 'verdadera' deuda de EU es de al menos
                60 billones de dólares
              </a>
            </h1>
            <span className="ByLine">By: Milenio Digital </span>
          </div>
        </div>
        <p className="descrip">
          El director ejecutivo de Tesla y SpaceX, Elon Musk, estimó que la
          deuda de Estados Unidos en tres veces mayor a su economía. ?La
          verdadera deuda nacional, incluidos los derechos no financiados, es de
          al menos 60 billones de dólares, aproximadamente tres veces el tamaño
          de toda la economía de ...
        </p>
        <p className="X" onClick={Close1}>
          x
        </p>
      </div>

      <div className="Story" id="Story2">
        <div className="Story-Head">
          <div>
            <img
              className="image"
              src="https://placehold.co/600x400?text=News+Story"
              alt="Img"
            ></img>
          </div>
          <div className="ByTitle">
            <h1>
              <a href="https://www.teslarati.com/tesla-recall-heater-defroster-system-transport-canada/">
                Tesla recall for heater and defroster systems issued by
                Transport Canada
              </a>
            </h1>
            <span className="ByLine">By: Maria Merano </span>
          </div>
        </div>
        <p className="descrip">
          Transport Canada issued a recall for the Tesla Model 3, Model Y, and
          Model S on February 3, 2022, the agency told Teslarati recently. The
          recall was issued after the agency discovered an issue with the heat
          system in certain Tesla vehicles. Transport Canada reported that a
          little over ...
        </p>
        <p className="X" onClick={Close2}>
          x
        </p>
      </div>

      <div className="Story" id="Story3">
        <div className="Story-Head">
          <div>
            <img
              className="image"
              src="https://placehold.co/600x400?text=News+Story"
              alt="Img"
            ></img>
          </div>
          <div className="ByTitle">
            <h1>
              <a href="https://www.infobae.com/america/agencias/2022/02/14/china-represento-la-mitad-de-las-ventas-globales-de-coches-electricos-en-2021-2/">
                China representó la mitad de las ventas globales de coches
                eléctricos en 2021
              </a>
            </h1>
            <span className="ByLine">By: Newsroom Infobae </span>
          </div>
        </div>
        <p className="descrip">
          Shanghái (China), 14 feb La mitad de las ventas de vehículos
          eléctricos registradas en 2021 a nivel mundial se efectuaron en China,
          según datos publicados hoy por la consultora Canalys. En total, según
          las estimaciones de Canalys, se vendieron 6,5 millones de este tipo de
          vehículos -incluyendo los totalmente eléctricos ...
        </p>
        <p className="X" onClick={Close3}>
          x
        </p>
      </div>
    </div>
  );
}
