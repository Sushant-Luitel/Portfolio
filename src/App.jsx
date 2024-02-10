import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
function App() {
  return (
    <>
      <section>
        <Navbar />
        <Hero />
      </section>

      <section>Services</section>
      <section>Parallax</section>
      <section>Project1</section>
      <section>Project2</section>
      <section>Project2</section>
      <section>Contact</section>
    </>
  );
}

export default App;
