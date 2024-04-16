import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div id="schedule" className="min-h-screen flex flex-col pb-20 pt-20 gap-8" style={{ backgroundImage: "url('/img/hero.png')", backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "repeat" }}>
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  );
}

export default App;
