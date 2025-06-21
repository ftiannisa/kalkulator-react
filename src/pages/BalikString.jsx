import { useRef, useState } from "react";
import Title from "../components/Title";
import Tombol from "../components/Tombol";

export default function BalikString() {
  const stringRef = useRef(null);
  const [output, setOutput] = useState(null);

  const balik = () => {
    let string = stringRef.current.value;

    // cek jika input kosong
    if (!string) {
      setOutput(null);
      alert("Input tidak boleh kosong!");
      return;
    }

    setOutput(
      <div className="output">{string.split("").reverse().join("")}</div>
    );
  };

  return (
    <>
      <Title id="Balik_String">Balik String</Title>
      <div className="content">
        <p className="desc">
          Masukkan string dan program akan menampilkan string yang dibalik.
          (<i>"hello" -&gt; "olleh"</i>)
        </p>

        <label>
          Masukkan string
          <input type="text" ref={stringRef} id="istring" />
        </label>
        <Tombol text="Balik" onclick={balik} />

        <br />
        {output}
      </div>
    </>
  );
}
