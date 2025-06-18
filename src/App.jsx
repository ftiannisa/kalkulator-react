import "./App.css";
import Navbar from "./components/Navbar";
import Kabisat from "./pages/Kabisat";
import Lingkaran from "./pages/Lingkaran";
import NotFound from "./pages/NotFound";
import Perbandingan from "./pages/Perbandingan";

function App() {
  return (
    <>
      <a href="/">
        <img
          className="logo"
          src="https://www.svgrepo.com/show/152169/calculator-buttons-interface-symbol.svg"
        />
      </a>
      <h1>Project Kalkulator Sederhana</h1>
      <p>
        Selamat datang di Project Kalkulator Sederhana! Anda dapat menggunakan
        fitur kalkulator lingkaran, membandingkan angka, atau mengecek tahun
        kabisat dengan mengklik menu di bawah ini
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
    case "/kabisat":
      return <Kabisat />;
    default:
      return <NotFound />;
  }
}

export default App;
