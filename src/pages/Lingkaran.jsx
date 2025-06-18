import { useRef, useState } from "react";
import Title from "../components/Title";
import "../App.css";

export default function Lingkaran() {
  const jariRef = useRef(null);
  const [output, setOutput] = useState(null);

  const kalkulator = () => {
    const PI = 3.14159;

    // cek jika input kosong
    if (!jariRef.current.value) {
      setOutput(null);
      alert("Input tidak boleh kosong!");
      return;
    }

    let jari = Number(jariRef.current.value);

    // validasi input
    // invalid jika input <= 0
    if (jari <= 0) {
      setOutput(null);
      alert("Input invalid. Coba lagi");
      return;
    }

    let luas = PI * jari ** 2;
    let keliling = PI * 2 * jari;

    setOutput(
      <div className="output">
        <p>
          <b>Luas: </b>
          {luas.toFixed(2)}
        </p>
        <p>
          <b>Keliling: </b>
          {keliling.toFixed(2)}
        </p>
      </div>
    );
  };

  return (
    <>
      <Title id="Kalkulator_Lingkaran">Kalkulator Lingkaran</Title>
      <div className="content">
        <p className="desc">
          Masukkan jari-jari lingkaran untuk menghitung luas dan kelilingnya.
        </p>

        <label>
          Jari-jari:
          <br />
          <input type="number" ref={jariRef} id="ijari" />
        </label>
        <button type="button" onClick={kalkulator}>
          Hitung
        </button>

        <br />
        {output}
      </div>
    </>
  );
}
