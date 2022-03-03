import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

import styled, { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
html,
body {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

#__next {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

`;

const Main = styled.main`
  flex: 1 0 auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const Select = styled.select`
  font-weight: bold;
  margin: 0;
  padding: 0.5rem;
  width: 200px;
  text-align: center;
  display: flex;
  place-self: center;
  margin-top: 10%;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  }
`;

interface PropsTextarea {
  readonly cursor?: string;
}

const Textarea = styled.textarea<PropsTextarea>`
  width: 70vw;
  height: 20vh;
  resize: none;
  z-index: 2;
  background: transparent;

  ${({ cursor }) =>
    cursor &&
    css`
      cursor: pointer;
    `}
`;

const Info = styled.p`
  margin: 0;
  width: 100vw;
  height: 100vh;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
`;

const InfoText = styled.span`
  font-weight: bold;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 5em;
  user-select: none;
`;

const InfoNote = styled.span`
  font-size: 0.8em;
  // position center
  display: flex;
  justify-content: center;
  position: absolute;
  left: 50%;
  bottom: 9vh;
  transform: translate(-50%, -50%);
  color: grey;
  opacity: 0.5;
  user-select: none;
  cursor: pointer;
  z-index: 1;
`;

const Home: NextPage = () => {
  const [text, setText] = useState<any>([]);
  const [copied, setCopied] = useState<boolean>(false);
  const [started, setStarted] = useState<boolean>(false);
  const [infoNoteText, setInfoNoteText] = useState<string>("Click me to copy");

  const [converter, setConverter] = useState<string>("alternative");
  const [pageTitle, setPageTitle] = useState<string>("SaRcAsM TyPeR");
  const [copyNote, setCopyNote] = useState<string>("CoPiEd!");

  const [scrollPosition, setScrollPosition] = useState(0);

  // input field onKeyUp
  const handleKeyUpInputArea = (e: any) => {
    doConversion(e.target.value);
    // queryselector hack..
    const output = document.querySelector("#output-textarea");
    if (output) output.scrollTop = scrollPosition;
  };

  // input field onClick re-start
  const handleClickInputArea = (e: any) => doConversion(e.target.value);

  // select onChange
  const changeConverter = (e: any) => {
    setConverter(e.target.value);

    setText([]);

    switch (e.target.value) {
      case "alternative":
        setPageTitle("SaRcAsM TyPeR");
        setCopyNote("CoPiEd!");
        break;
      case "reversed":
        setPageTitle("repyT msacraS");
        setCopyNote("!deipoC");
        break;
      default:
        setPageTitle("SaRcAsM TyPeR");
        setCopyNote("CoPiEd!");
    }

    const output = document.querySelector<HTMLInputElement>("#input-textarea");
    if (output) {
      setTimeout(() => {
        output.click();
        output.focus();
      }, 0);
    }
  };

  // copy to clipboard
  const handleCopy = () => {
    if (text.length < 5) {
      return;
    }

    try {
      navigator.clipboard.writeText(text.toString());
      //setStarted(false);
      setInfoNoteText("Copied!");
    } catch (error) {
      console.log(error);
    }

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  // get scroll position of input area, apply to output in handleKeyUpInputArea function
  const getScrollPosition = (e: any) => setScrollPosition(e.target.scrollTop);

  // do the conversion app
  const doConversion = (value: any) => {
    if (value.length === 0) setText([]);

    const textString: any = value.toString();

    const charObj: any = textString.split("");

    switch (converter) {
      case "alternative":
        setPageTitle("SaRcAsM TyPeR");
        try {
          for (let i = 0; i < charObj.length; i++) {
            if (i % 2 === 1) {
              charObj[i] = charObj[i].toLowerCase();
            } else {
              charObj[i] = charObj[i].toUpperCase();
            }
            setText(charObj.join(""));
          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "reversed":
        setPageTitle("repyT msacraS");
        try {
          setText(textString.split("").reverse().join(""));
        } catch (error) {
          console.log(error);
        }
        break;
      default:
        break;
    }

    if (!started && text.length > 5) {
      setStarted(true);
    }
    if (text.length < 5) {
      setStarted(false);
    }

    if (infoNoteText === "Copied!") {
      setInfoNoteText("Click me to copy");
    }
  };

  return (
    <Main>
      <GlobalStyle />
      <Head>
        <title>SaRcAsM TyPeR</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container>
        <Heading>{pageTitle}</Heading>
        <Select name="convert" onChange={changeConverter}>
          <option value="alternative" defaultChecked>
            AlTeRnAtInG CaSe
          </option>
          <option value="reversed">Reversed Case</option>
        </Select>
        <Section>
          <Textarea
            id="input-textarea"
            onKeyUp={handleKeyUpInputArea}
            onClick={handleClickInputArea}
            onScroll={getScrollPosition}
            autoFocus={true}
          />
          <br /> <br />
          <p>Converted text </p>
          <Textarea
            id="output-textarea"
            readOnly={true}
            value={text}
            cursor="pointer"
            onClick={handleCopy}
            title="Click me to copy"
          />
          {started && <InfoNote>{infoNoteText}</InfoNote>}
          {copied && (
            <Info>
              <InfoText>{copyNote}</InfoText>
            </Info>
          )}
        </Section>
      </Container>
    </Main>
  );
};

export default Home;
