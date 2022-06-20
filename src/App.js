import React from "react";
import { Container } from 'react-bootstrap';
import "./_assets/sass/style.scss";
import Main from "./components/Main/Main";
import Banner from "./components/Banner/Banner";
import ApresentacaoResultados from "./components/ApresentacaoResultados/ApresentacaoResultados";
import Footer from "./components/Footer/Footer";
import Final from "./components/Final/Final";

function App() {
  return (
    <div className="App">
      <Main />
        <Container>
          <Banner />
          <ApresentacaoResultados />
        </Container>
      <Footer />
      <Final />
    </div>
   )
}
export default App;
