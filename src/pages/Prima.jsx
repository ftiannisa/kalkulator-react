import { useRef, useState } from "react";
import Title from "../components/Title";
import Tombol from "../components/Tombol";

export default function Prima() {
  const angkaRef = useRef(null);
  const [output, setOutput] = useState(null);

  const isPrime = (angka) => {
    if (angka <= 1) return false;

    for (let i = 2; i < Math.sqrt(angka); i++) {
      if (angka % i === 0) return false;
    }

    return true;
  };

  const cek = () => {
    // cek jika input kosong
    if (!angkaRef.current.value) {
      setOutput(null);
      alert("Input tidak boleh kosong!");
      return;
    }

    let angka = Number(angkaRef.current.value);

    // validasi input
    // invalid jika angka bukan bilangan bulat
    if (!Number.isInteger(angka)) {
      setOutput(null);
      alert("Input invalid. Coba lagi");
      return;
    }

    setOutput(
      <div className="output">
        {isPrime(angka) ? (
          <>
            {angka} adalah <b>bilangan prima</b>
          </>
        ) : (
          <>
            {angka} <b>bukan</b> bilangan prima
          </>
        )}{" "}
      </div>
    );
  };

  return (
    <>
      <Title id="Bilangan_Prima">Bilangan Prima</Title>
      <div className="content">
        <p className="desc">Cek apakah suatu angka adalah bilangan prima.</p>

        <label>
          Masukkan angka
          <input type="number" ref={angkaRef} id="iangka" />
        </label>
        <Tombol text="Cek Prima" onclick={cek}/>

        <br />
        {output}
      </div>
    </>
  );
}
