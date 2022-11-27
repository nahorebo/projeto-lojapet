import React from "react";
import Header from "../components/header/Header";
import Body from "../components/body/Body";
import Footer from "../components/footer/Footer";
import "../assets/styles.css";
import Routes from "./index";
function App() {
  return (
    <div>
      <Routes />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;