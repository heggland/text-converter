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
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
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
  const [text, setText] = useState([]);
  const [copied, setCopied] = useState(false);
  const [started, setStarted] = useState(false);
  const [infoNoteText, setInfoNoteText] = useState("Click me to copy");

  const handleKeyUp = (e: any) => {
    const value = e.target.value;

    if (value.length === 0) setText([]);

    let text = value.toString();

    const charObj = text.split("");

    for (let i = 0; i < charObj.length; i++) {
      try {
        if (i % 2 === 1) {
          charObj[i] = charObj[i].toLowerCase();
        } else {
          charObj[i] = charObj[i].toUpperCase();
        }
        setText(charObj.join(""));
      } catch (error) {
        console.log(error);
      }
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

  const handleCopy = () => {
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

  return (
    <Main>
      <GlobalStyle />
      <Head>
        <title>SaRcAsM TyPeR</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container>
        <Heading>SaRcAsM TyPeR </Heading>
        <Section>
          <p>Type here </p>
          <Textarea onKeyUp={handleKeyUp} autoFocus={true} />
          <br /> <br />
          <p>Converted text </p>
          <Textarea
            readOnly={true}
            value={text}
            cursor="pointer"
            onClick={handleCopy}
            title="Click me to copy"
          />
          {started && <InfoNote>{infoNoteText}</InfoNote>}
          {copied && (
            <Info>
              <InfoText>CoPiEd!</InfoText>
            </Info>
          )}
        </Section>
      </Container>
    </Main>
  );
};

export default Home;
