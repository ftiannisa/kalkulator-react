import styles from "@styles/Navbar.module.css";

export default function Navbar() {
  return (
    <ul className={styles.navbar}>
      <li>
        <a href="lingkaran">Kalkulator Lingkaran</a>
      </li>
      <li>
        <a href="perbandingan">Bandingkan Angka</a>
      </li>
      <li>
        <a href="cek_kabisat">Cek Tahun Kabisat</a>
      </li>
      <li>
        <a href="cek_prima">Cek Bilangan Prima</a>
      </li>
      <li>
        <a href="filter_genap">Filter Angka Genap</a>
      </li>
      <li>
        <a href="balik_string">Balik String</a>
      </li>
      <li>
        <a href="counter">Counter</a>
      </li>
      <li>
        <a href="daftar_nama">Daftar Nama</a>
      </li>
      <li>
        <a href="tombol">Tombol</a>
      </li>
    </ul>
  );
}
