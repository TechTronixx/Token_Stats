import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardContainer from "./components/Cards/CardContainer";

function App() {
  return (
    <div className="PRNT-Container">
      {/* <!-- Navbar --> */}
      <Header />

      {/* <!-- Container --> */}
      <main className="PRNT-Main">
        <CardContainer />
      </main>
      {/* <!-- Footer --> */}
      <Footer />
    </div>
  );
}

export default App;
