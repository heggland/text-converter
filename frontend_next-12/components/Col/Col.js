import Style from "./Col.style";

const Col = ({ children, ...rest }) => {
  return <Style values={rest}>{props.children}</Style>;
};

export default Col;
