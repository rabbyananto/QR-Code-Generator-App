import React from "react";
import Qrcode from "qrcode";
import { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [qrcode, setQrcode] = useState("");

  const GenerateQrCode = () => {
    Qrcode.toDataURL(
      url,
      {
        width: 800,
        margin: 2,
      },
      (err, url) => {
        if (err) return console.error(err);
        console.log(url);
        setQrcode(url);
      }
    );
  };
  return (
    <div className="app">
      <h1>QR CODE GENERATOR</h1>
      <input
        placeholder="Your link goes here"
        type="text"
        value={url}
        onChange={(evt) => setUrl(evt.target.value)}
      />
      <button onClick={GenerateQrCode}>Generate</button>
      {qrcode && (
        <>
          <img src={qrcode} alt="Qrcode image" />
          <a href={qrcode} download="qrcode.png">
            Download
          </a>
        </>
      )}
    </div>
  );
}

export default App;
