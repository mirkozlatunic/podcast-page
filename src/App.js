import Modal from "./Components/Modal";
import "./App.css";
import Logo from "./assets/desktop/logo.svg";
import background from "./assets/desktop/image-host.jpg";
import dots from "./assets/desktop/bg-pattern-dots.svg";

const App = () => {
  return (
    <div className="app">
      <div className="app__content">
        <img src={Logo} alt="logo" className="app__logo" />
        <img
          src={background}
          alt="background-pic"
          className="app__background"
        />
      </div>
      <img src={dots} alt="dots" className="app__dots" />
      <Modal />
    </div>
  );
};

export default App;
