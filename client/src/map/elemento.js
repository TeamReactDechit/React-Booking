const Elemento = ({ coordinate, attributi }) => {
  return coordinate?.map((cord, index) => (
    <path
    key={index}
      d={cord}
      {...attributi[index]?.reduce((prev, curr) => {
        prev[curr.name] = curr.value;

        return prev;
      }, {})}
    ></path>
  ));
};

export default Elemento;
