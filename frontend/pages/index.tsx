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

  ${({ cursor }) =>
    cursor &&
    css`
      cursor: pointer;
    `}
`;

const Info = styled.p`
  padding: 0.5rem;
  width: 50%;
  height: 50%;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const InfoText = styled.span`
  font-weight: bold;
  // center text
  display: flex;
  justify-content: center;
  // position center
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 5rem;
`;

const Home: NextPage = () => {
  const [text, setText] = useState([]);
  const [copied, setCopied] = useState(false);

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
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text.toString());
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
          <p>Type here: </p>
          <Textarea onKeyUp={handleKeyUp} />
          <br /> <br />
          <p>Converted text: </p>
          <Textarea
            readOnly={true}
            value={text}
            cursor="pointer"
            onClick={handleCopy}
            title="Click me to copy"
          />
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
