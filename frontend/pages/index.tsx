import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

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
    }, 2000);
  };

  return (
    <div style={{ display: "flex", placeContent: "center" }}>
      <div style={{ display: "inline-grid", placeItems: "center" }}>
        <Head>
          <title>SaRcAsM TyPeR</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <h1>SaRcAsM TyPeR </h1>
        <p>TyPe hErE: </p>
        <textarea
          onKeyUp={handleKeyUp}
          style={{ width: "70vw", height: "20vh", resize: "none" }}
        ></textarea>
        <br /> <br />
        <p>OuTpUt hErE: </p>
        <textarea
          readOnly={true}
          value={text}
          style={{
            width: "70vw",
            height: "20vh",
            resize: "none",
            cursor: "pointer",
          }}
          onClick={handleCopy}
          title="Click me to copy"
        />
        {copied && <p>Copied!</p>}
      </div>
    </div>
  );
};

export default Home;
