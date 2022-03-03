import styled, { css } from "styled-components";
import * as Colors from "@/constants/colors";
import * as Breakpoints from "@/constants/breakpoints";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  ${({ values }) =>
    values.hasOwnProperty("bgColor") &&
    values.bgColor &&
    css`
      background-color: ${values.bgColor};
    `}

  ${({ values }) =>
    values.hasOwnProperty("placeContent") &&
    isNaN(values.placeContent) &&
    css`
      place-content: ${values.placeContent};
    `}

  ${({ values }) =>
    (values.hasOwnProperty("height") &&
      !isNaN(values.height) &&
      css`
      height: ${values.height}%;
      }
    `) ||
    css`
      height: ${values.height};
    `}

    ${({ values }) =>
    values.hasOwnProperty("float") &&
    isNaN(values.float) &&
    css`
      float: ${values.float};
      }
    `}

    ${({ values }) =>
    values.hasOwnProperty("padding") &&
    values.padding &&
    css`
      padding: ${values.padding};
      }
    `}

    ${({ values }) =>
    values.hasOwnProperty("padding_sm") &&
    values.padding_sm &&
    css`
      ${Breakpoints.sm} {
        padding: ${values.padding_sm};
      }
    `}

    ${({ values }) =>
    values.hasOwnProperty("margin") &&
    values.margin &&
    css`
      margin: ${values.margin};
      }
    `}

    
  // position

  ${({ values }) =>
    values.hasOwnProperty("relative") &&
    css`
      position: relative;
      z-index: 10;
    `}

  ${({ values }) =>
    values.hasOwnProperty("absolute") &&
    css`
      position: absolute;
    `}

  ${({ values }) =>
    values.hasOwnProperty("zIndex") &&
    css`
      z-index: ${values.zIndex};
    `}

  ${({ values }) =>
    values.hasOwnProperty("left") &&
    values.left &&
    css`
      left: 0;
    `}

  ${({ values }) =>
    values.hasOwnProperty("right") &&
    values.right &&
    css`
      right: 0;
    `}

  ${({ values }) =>
    values.hasOwnProperty("top") &&
    values.top &&
    css`
      top: 0;
    `}

  ${({ values }) =>
    values.hasOwnProperty("bottom") &&
    values.bottom &&
    css`
      bottom: 0;
    `}

  // absolute center
  ${({ values }) =>
    values.hasOwnProperty("center") &&
    values.center &&
    css`
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `}

  ${({ values }) =>
    values.hasOwnProperty("zIndex") &&
    css`
      z-index: ${values.zIndex};
    `}

  ${({ values }) =>
    values.hasOwnProperty("borderBottom") &&
    values.borderBottom &&
    css`
      border-bottom: 1px solid ${Colors.offwhite};
    `}
`;

export default Container;
