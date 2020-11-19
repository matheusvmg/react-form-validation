import "./App.css";
import Form from "./components/Form/index";
import hero from "./assets/6 SCENE.svg";

function App() {
  return (
    <div className="App">
      <section className="hero-section">
        <img src={hero} alt="img principal" id="hero" />
      </section>
      <section className="form-section">
        <h1 className="title">Sign Up</h1>
        <p className="subtitle">
          Get started with us today! Create your account by
        </p>
        <p className="subtitle" id="sub">
          filling out the information below.
        </p>
        <Form />
      </section>
    </div>
  );
}

export default App;
