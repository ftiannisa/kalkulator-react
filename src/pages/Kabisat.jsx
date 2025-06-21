import { useRef, useState } from "react";
import Title from "../components/Title";
import Tombol from "../components/Tombol";

export default function Kabisat() {
  const tahunRef = useRef(null);
  const [output, setOutput] = useState(null);

  const cek = () => {
    // cek jika input kosong
    if (!tahunRef.current.value) {
      setOutput(null);
      alert("Input tidak boleh kosong!");
      return;
    }

    let tahun = Number(tahunRef.current.value);
    let kabisat = false;

    // validasi input
    // invalid jika tahun bernilai negatif atau desimal
    if (tahun < 0 || !Number.isInteger(tahun)) {
      setOutput(null);
      alert("Input invalid. Coba lagi");
      return;
    }

    if ((tahun % 4 == 0 && tahun % 100 != 0) || tahun % 400 == 0) {
      kabisat = true;
    }

    setOutput(
      <div className="output">
        {kabisat ? (
          <>
            {tahun} adalah <b>tahun kabisat</b>
          </>
        ) : (
          <>
            {tahun} <b>bukan</b> tahun kabisat
          </>
        )}
      </div>
    );
  };

  return (
    <>
      <Title id="Tahun_Kabisat">Tahun Kabisat</Title>
      <div className="content">
        <p className="desc">Cek apakah suatu tahun adalah tahun kabisat.</p>

        <label>
          Masukkan tahun
          <input type="number" ref={tahunRef} id="itahun" />
        </label>
        <Tombol text="Cek" onclick={cek}/>

        <br />
        {output}
      </div>
    </>
  );
}
