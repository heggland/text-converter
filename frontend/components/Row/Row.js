import Style from "./Row.style";

const Row = ({ children, ...rest }) => {
  return <Style values={rest}>{children}</Style>;
};

export default Row;
