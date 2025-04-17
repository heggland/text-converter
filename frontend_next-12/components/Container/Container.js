import Style from "./Container.style";

const Container = ({ children, ...rest }) => {
  return <Style values={rest}>{props.children}</Style>;
};

export default Container;
