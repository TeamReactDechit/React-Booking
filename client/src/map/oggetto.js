import Elemento from "./elemento";

const Oggetto = ({ nome, stile, coordinate, attributi , ...props}) => {
  return (
    <g id={nome} className={stile}>
      {coordinate&&<Elemento coordinate={coordinate} attributi={attributi} />}
      {props.children}
    </g>
  );
};

export default Oggetto;
