import "./App.css";
import Navbar from "./components/Navbar";
import BalikString from "./pages/BalikString";
import Counter from "./pages/Counter";
import DaftarNama from "./pages/DaftarNama";
import FilterGenap from "./pages/FilterGenap";
import Kabisat from "./pages/Kabisat";
import Lingkaran from "./pages/Lingkaran";
import NotFound from "./pages/NotFound";
import PageTombol from "./pages/PageTombol";
import Perbandingan from "./pages/Perbandingan";
import Prima from "./pages/Prima";

function App() {
  return (
    <>
      <a href="/">
        <img className="logo" src="src\assets\react.svg" />
      </a>
      <h1>Project React Sederhana</h1>
      <p>
        Selamat datang di Project React Sederhana! Anda dapat menggunakan fitur
        kalkulator lingkaran, membandingkan angka, atau fitur-fitur lainnya
        dengan mengklik menu di bawah ini
      </p>
      <Navbar />
      <section>{routing()}</section>
    </>
  );
}

function routing() {
  const pathName = window.location.pathname;

  switch (pathName) {
    case "/":
      return <Lingkaran />;
    case "/lingkaran":
      return <Lingkaran />;
    case "/perbandingan":
      return <Perbandingan />;
    case "/cek_kabisat":
      return <Kabisat />;
    case "/cek_prima":
      return <Prima />;
    case "/filter_genap":
      return <FilterGenap />;
    case "/balik_string":
      return <BalikString/>
    case "/counter":
      return <Counter/>
    case "/daftar_nama":
      return <DaftarNama/>
    case "/tombol":
      return <PageTombol />;
    default:
      return <NotFound />;
  }
}

export default App;
