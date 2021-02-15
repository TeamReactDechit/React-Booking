import Elemento from "./elemento";

const Oggetto = ({ nome, stile, coordinate, attributi }) => {
  return (
    <g id={nome} className={stile}>
      <Elemento coordinate={coordinate} attributi={attributi} />
    </g>
  );
};

export default Oggetto;
