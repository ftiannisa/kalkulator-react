import { useRef, useState } from "react";
import Title from "../components/Title";
import Tombol from "../components/Tombol";
import NameList from "../components/NameList";

export default function DaftarNama() {
  const namaRef = useRef(null);
  const [output, setOutput] = useState(null);

  const tampil = () => {
    let daftarNama = namaRef.current.value;

    // cek jika input kosong
    if (!daftarNama) {
      setOutput(null);
      alert("Input tidak boleh kosong!");
      return;
    }

    const namaArray = daftarNama.split(",");

    setOutput(
      <div className="output">
        <NameList names={namaArray} />
      </div>
    );
  };

  return (
    <>
      <Title id="Daftar_Nama">Daftar Nama</Title>
      <div className="content">
        <p className="desc">
          Masukkan daftar nama dan program akan menampilkannya dalam bentuk
          list.
        </p>

        <label>
          Masukkan daftar nama
          <input
            type="text"
            placeholder="Alice, Bob, Charlie"
            ref={namaRef}
            id="inama"
          />
        </label>
        <Tombol text="Tampilkan" onclick={tampil} />

        <br />
        {output}
      </div>
    </>
  );
}
