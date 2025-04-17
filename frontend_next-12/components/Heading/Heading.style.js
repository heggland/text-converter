import styled, { css } from "styled-components";

const Heading = styled.div`
  & * {
    ${({ values }) =>
      values.hasOwnProperty("color") &&
      css`
        color: ${values.color};
      `}

    ${({ values }) =>
      values.hasOwnProperty("weight") &&
      css`
        font-weight: ${values.weight};
      `}

      ${({ values }) =>
      values.hasOwnProperty("size") &&
      css`
        font-size: ${values.size};
      `}

    ${({ values }) =>
      values.hasOwnProperty("padding") &&
      css`
        padding: ${values.padding};
      `}

    ${({ values }) =>
      values.hasOwnProperty("margin") &&
      css`
        margin: ${values.margin};
      `}

  ${({ values }) =>
      values.hasOwnProperty("userSelect") &&
      css`
    user-select: ${values.userSelect};
    } 
  `}
  }
`;

export default Heading;
