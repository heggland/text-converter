import Style from "./Textarea.style";

const Textarea = ({ children, ...rest }) => {
  return <Style values={rest}>{children}</Style>;
};

export default Textarea;
