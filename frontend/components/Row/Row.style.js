import styled, { css } from "styled-components";
import * as Breakpoints from "@/constants/breakpoints";

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${({ values }) =>
    values.hasOwnProperty("reverse") &&
    css`
      display: flex;
      flex-direction: column-reverse;
    `}

  ${({ values }) =>
    values.hasOwnProperty("width") &&
    css`
      width: ${values.width};
    `}

  ${({ values }) =>
    values.hasOwnProperty("height") &&
    css`
      height: ${values.height};
    `}

${({ values }) =>
    values.hasOwnProperty("margin") &&
    css`
      margin: ${values.margin};
    `}

${({ values }) =>
    values.hasOwnProperty("padding") &&
    css`
      padding: ${values.padding};
    `}

${({ values }) =>
    values.hasOwnProperty("flexDirection") &&
    css`
      display: flex;
      flex-direction: ${values.flexDirection};
    `}

  ${({ values }) =>
    values.hasOwnProperty("bgColor") &&
    css`
      background-color: ${values.bgColor};
    `}

${({ values }) =>
    values.hasOwnProperty("justifyContent") &&
    css`
      justify-content: ${values.justifyContent};
      ${Breakpoints.xsOnly} {
        justify-content: center;
      }
    `}

${({ values }) =>
    values.hasOwnProperty("alignSelf") &&
    css`
      align-self: ${values.alignSelf};
    `}


${({ values }) =>
    values.hasOwnProperty("alignItems") &&
    css`
      align-items: ${values.alignItems};
      ${Breakpoints.xsOnly} {
        align-items: center;
      }
    `}

${({ values }) =>
    values.hasOwnProperty("textAlignLast") &&
    css`
      text-align-last: ${values.textAlignLast};
    `}

${({ values }) =>
    values.hasOwnProperty("textAlign") &&
    css`
      text-align: ${values.textAlign};
    `}

${({ values }) =>
    values.hasOwnProperty("placeContent") &&
    css`
      place-content: ${values.placeContent};
    `}

${({ values }) =>
    values.hasOwnProperty("border") &&
    css`
      border-bottom: ${values.borderSize || 1}px solid;
    `}

${({ values }) =>
    values.hasOwnProperty("borderColor") &&
    css`
      border-color: ${values.borderColor || "black"};
    `}


${({ values }) =>
    values.hasOwnProperty("hover") &&
    css`
      &:hover {
        background-color: ${values.hover};
      }
      cursor: default;
    `}

${({ values }) =>
    values.hasOwnProperty("cursor") &&
    css`
      &:hover {
        cursor: ${values.cursor};
      }
    `}

${({ values }) =>
    values.hasOwnProperty("size") &&
    css`
      font-size: ${values.size};
    `}

${({ values }) =>
    values.hasOwnProperty("zIndex") &&
    css`
      z-index: ${values.zIndex};
    `}


// breakpoints
${({ values }) =>
    // xs
    values.hasOwnProperty("xs") &&
    isNaN(values.xs) &&
    css`
      width: ${({ values }) => values.xs === "auto" && "auto"};
      ${Breakpoints.xsOnly} {
        display: ${({ values }) => (values.xs === "none" && "none") || "flex"};
      }
    `}

${({ values }) =>
    // sm
    values.hasOwnProperty("sm") &&
    isNaN(values.sm) &&
    css`
      width: ${({ values }) => values.sm === "auto" && "auto"};
      ${Breakpoints.smOnly} {
        display: ${({ values }) => (values.sm === "none" && "none") || "flex"};
      }
    `}

  ${({ values }) =>
    // md
    values.hasOwnProperty("md") &&
    isNaN(values.md) &&
    css`
      width: ${({ values }) => values.md === "auto" && "auto"};
      ${Breakpoints.mdOnly} {
        display: ${({ values }) => (values.md === "none" && "none") || "flex"};
      }
    `}

  ${({ values }) =>
    // lg
    values.hasOwnProperty("lg") &&
    isNaN(values.xs) &&
    css`
      width: ${({ values }) => values.lg === "auto" && "auto"};
      ${Breakpoints.lgOnly} {
        display: ${({ values }) => (values.lg === "none" && "none") || "flex"};
      }
    `}

  ${({ values }) =>
    // xl
    values.hasOwnProperty("xl") &&
    isNaN(values.xl) &&
    css`
      width: ${({ values }) => values.xl === "auto" && "auto"};
      ${Breakpoints.xlOnly} {
        display: ${({ values }) => (values.xl === "none" && "none") || "flex"};
      }
    `}

    ${({ values }) =>
    // xxl
    values.hasOwnProperty("xxl") &&
    isNaN(values.xxl) &&
    css`
      width: ${({ values }) => values.xxl === "auto" && "auto"};
      ${Breakpoints.xxlOnly} {
        display: ${({ values }) => (values.xxl === "none" && "none") || "flex"};
      }
    `}

${({ values }) =>
    // mobileOnly
    values.hasOwnProperty("mobileOnly") &&
    values.mobileOnly &&
    css`
      ${Breakpoints.desktopOnly} {
        display: none;
      }
    `}

${({ values }) =>
    // mobileOnly
    values.hasOwnProperty("desktopOnly") &&
    values.desktopOnly &&
    css`
      ${Breakpoints.mobileOnly} {
        display: none;
      }
    `}
`;

export default Row;
