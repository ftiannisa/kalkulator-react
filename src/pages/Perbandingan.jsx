import { useRef, useState } from "react";
import Title from "../components/Title";

export default function Perbandingan() {
  const aRef = useRef(null);
  const bRef = useRef(null);
  const [output, setOutput] = useState(null);

  const bandingkan = () => {
    let a = Number(aRef.current.value);
    let b = Number(bRef.current.value);

    // cek jika input kosong
    if (!aRef.current.value || !bRef.current.value) {
      setOutput(null);
      alert("Input tidak boleh kosong!");
      return;
    }

    let c = a > b ? a : b;
    setOutput(
      <div className="output">
        Angka terbesar adalah <b>{c}</b>
      </div>
    );
  };

  return (
    <>
      <Title id="Bandingkan_Angka">Bandingkan Angka</Title>
      <div className="content">
        <p className="desc">
          Masukkan dua angka dan program akan menampilkan angka yang lebih
          besar.
        </p>

        <label>
          Angka 1
          <input type="number" ref={aRef} id="iangka1" />
        </label>
        <br />
        <label>
          Angka 2
          <input type="number" ref={bRef} id="iangka2" />
        </label>
        <br />
        <button type="button" onClick={bandingkan}>
          Bandingkan
        </button>

        <br />
        {output}
      </div>
    </>
  );
}
