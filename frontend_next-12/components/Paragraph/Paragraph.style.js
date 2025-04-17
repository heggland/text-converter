import styled, { css } from "styled-components";

const Paragraph = styled.p`
  font-size: 14px;

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
    values.hasOwnProperty("color") &&
    css`
      color: ${values.color};
    `}


  ${({ values }) =>
    values.hasOwnProperty("userSelect") &&
    css`
    user-select: ${values.userSelect};
    } 
  `}


  ${({ values }) =>
    values.hasOwnProperty("textAlign") &&
    css`
    text-align: ${values.textAlign};
    } 
  `}

  ${({ values }) =>
    values.hasOwnProperty("underline") &&
    css`
    border-bottom: 1px solid;
  } 
  `}
`;

export default Paragraph;
