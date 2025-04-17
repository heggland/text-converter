import PropTypes from "prop-types";
import Style from "./Heading.style";

const Heading = ({ children, ...rest }) => {
  const VariableHeading = `h${(props.type && props.type) || 1}`;
  return (
    <Style values={rest}>
      <VariableHeading>{children}</VariableHeading>
    </Style>
  );
};

export default Heading;

Heading.propTypes = {
  type: PropTypes.number,
  children: PropTypes.node.isRequired,
};
