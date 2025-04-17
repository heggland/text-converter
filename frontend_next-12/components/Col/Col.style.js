import styled, { css } from "styled-components";
import * as Breakpoints from "@/constants/breakpoints";

// fetch the media query breakpoint
const handleBreakpoint = (values) => {
  // check if values has breakpoints key
  const breakpointsKey = ["xs", "sm", "md", "lg", "xl", "xxl"];
  if (!breakpointsKey.includes(values)) return false;

  switch (values) {
    case "xs":
      return Breakpoints.xs;
    case "sm":
      return Breakpoints.sm;
    case "md":
      return Breakpoints.md;
    case "lg":
      return Breakpoints.lg;
    case "xl":
      return Breakpoints.xl;
    case "xxl":
      return Breakpoints.xxl;
    default:
      return Breakpoints.xs;
  }
};

// create media css
function CreateCSS(values) {
  let styles = "";

  for (let key in values) {
    if (values.hasOwnProperty(key)) {
      if (!isNaN(values[key])) {
        const keyValue =
          values[key] >= 0 || values.key <= 12 ? values[key].toString() : 12;

        styles += css`
          ${handleBreakpoint(key)} {
            width: calc(calc(100% / 12) * ${keyValue});
            display: block;
          }
        `;
      } else {
        if (values[key] === "auto") {
          styles += css`
        ${handleBreakpoint(key)} {
          width: auto;);
        }
      `;
        } else if (values[key] === "none") {
          styles += css`
          ${handleBreakpoint(key)} {
            display: none;);
          }
        `;
        }
      }
    }
  }
  // remove , from width
  styles = styles.replace(/,/g, "");
  return styles;
}

const Col = styled.div`
  height: fit-content;

  ${({ values }) =>
    values.height &&
    css`
      height: ${values.height};
    `}

  ${({ values }) =>
    values.width &&
    css`
      width: ${values.width};
    `}

  ${({ values }) =>
    values.placeContent &&
    css`
      place-content: ${values.placeContent};
      display: flex !imporant;
      flex-direction: column;
    `}

    ${({ values }) =>
    values.alignItems &&
    css`
      align-items: ${values.alignItems};
      display: flex !important;
    `}
    
    ${({ values }) =>
    values.alignSelf &&
    css`
      align-self: ${values.alignSelf};
    `}

    ${({ values }) =>
    values.justifyContent &&
    css`
      display: flex;
      justify-content: ${values.justifyContent};
    `}

  ${({ values }) =>
    values.overflow === "hidden" &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `}

  ${({ values }) =>
    values.margin &&
    css`
      margin: ${values.margin};
    `}

    
    ${({ values }) =>
    values.padding &&
    css`
      padding: ${values.padding};
    `}

        
    ${({ values }) =>
    values.justifyContent &&
    css`
      background-color: ${values.backgroundColor};
    `}

  ${({ values }) => values && CreateCSS(values)}
`;

export default Col;
