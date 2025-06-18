import styles from "@styles/Navbar.module.css";

export default function Navbar() {
  return (
    <ul className={styles.navbar}>
      <li>
        <a href="lingkaran">Kalkulator Lingkaran</a>
      </li>
      <li>|</li>
      <li>
        <a href="perbandingan">Bandingkan Angka</a>
      </li>
      <li>|</li>
      <li>
        <a href="kabisat">Cek Tahun Kabisat</a>
      </li>
    </ul>
  );
}
