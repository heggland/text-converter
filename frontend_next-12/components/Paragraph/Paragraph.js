import Style from "./Paragraph.style";

const Paragraph = ({ children, ...rest }) => {
  return (
    <Style values={rest} theme>
      {children}
    </Style>
  );
};

export default Paragraph;
