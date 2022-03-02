import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

const Home: NextPage = () => {
  const [text, setText] = useState([]);

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

  return (
    <div style={{ display: "inline-grid" }}>
      <Head>
        <title>SaRcAsM TyPeR</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>SaRcAsM TyPeR </h1>
      <span>TyPe hErE: </span>
      <textarea onKeyUp={handleKeyUp}></textarea>
      <br /> <br />
      <span>OuTpUt hErE: </span>
      <textarea readOnly={true} value={text} />
    </div>
  );
};

export default Home;
