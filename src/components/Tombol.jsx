import { useState } from "react";

export default function Tombol({ text = "Tekan Saya", onclick }) {
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setMessage("Tombol diklik!");
  };

  return (
    <>
      <button onClick={onclick || handleClick}>{text}</button>
      {message && <p>{message}</p>}
    </>
  );
}
