import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <div className="top">
        <SocialButtons />
        <Identity />
      </div>
      <div className="bottom">
        <Biodata />
        <Highlight />
      </div>
    </div>
  );
}

function Header() {}

function SocialButtons() {
  return (
    <>
      <div className="social-buttons">
        <button>
          <a href="https://www.instagram.com/naufalramdhan/" target="_blank">
            <i className="fab fa-instagram"></i>
          </a>
        </button>
        <button>
          <a href="https://www.instagram.com/naufalramdhan/" target="_blank">
            <i className="fab fa-facebook"></i>
          </a>
        </button>
        <button>
          <a href="https://www.instagram.com/naufalramdhan/" target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
        </button>
      </div>
      <div className="social-buttons right">
        <button>
          <a href="https://github.com/naufalramdhqn" target="_blank">
            <i className="fab fa-github"></i>
          </a>
        </button>
        <button>
          <a href="https://www.linkedin.com/in//" target="_blank">
            <i className="fab fa-linkedin"></i>
          </a>
        </button>
      </div>
    </>
  );
}
function Biodata() {
  return (
    <div className="desc">
      <p>
        Hi, My Name Is <b>Naufal Ramdhan</b>
      </p>
    </div>
  );
}
function Identity() {
  return (
    <div className="text">
      <p className="name-wrapper">Naufal Ramdhan</p>
      <p className="title">Software Engineer</p>
    </div>
  );
}

function Highlight() {
  return (
    <div className="buttons">
      <button>
        <div className="height">Amd</div>
      </button>
      <button>
        <div className="height">Programming</div>
      </button>
      <button>
        <div className="height">Gaming</div>
      </button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
