import Elemento from "./elemento";

const Oggetto = ({ nome, stile, coordinate, attributi }) => {
  return (
    <g id={nome} className={stile}>
      <Elemento coordinate={coordinate} attributi={attributi} />
      {props.children}
    </g>
  );
};

export default Oggetto;
