import { useRef, useState } from "react";
import Title from "../components/Title";
import Tombol from "../components/Tombol";

export default function FilterGenap() {
  const deretRef = useRef(null);
  const [output, setOutput] = useState(null);

  const filterGenap = () => {
    let deret = deretRef.current.value;

    // cek jika input kosong
    if (!deret) {
      setOutput(null);
      alert("Input tidak boleh kosong!");
      return;
    }

    const deretArray = deret.split(/[ ,]+/);
    const deretGenap = deretArray.filter((angka) => angka % 2 === 0);

    setOutput(
      <div className="output">
        {deretGenap.length === 0 ? (
          <>Tidak ada angka genap dalam deret yang Anda input</>
        ) : (
          deretGenap.map((angka, index) => (
            <>
              {angka}
              {index < deretGenap.length - 1 && ", "}
            </>
          ))
        )}
      </div>
    );

    return 0;
  };

  return (
    <>
      <Title id="Filter_Genap">Filter Angka Genap</Title>
      <div className="content">
        <p className="desc">
          Masukkan deret angka sebagai input dan program hanya akan menampilkan
          angka genap dari deret tersebut.
        </p>

        <label>
          Masukkan deret angka
          <input
            type="text"
            placeholder="1, 2, 3, 4, 5"
            ref={deretRef}
            id="ideret"
          />
        </label>
        <Tombol text="Filter" onclick={filterGenap}/>

        <br />
        {output}
      </div>
    </>
  );
}
