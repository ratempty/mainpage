import React from "react";
import {
  GlobalStyle,
  Gnb,
  Article,
  Header,
  Main,
  Explane,
} from "../style/style";
import Navigation from "../content/Navigation";
import Weather from "../content/Weather";
import Form from "../content/Form";

function Contact() {
  return (
    <GlobalStyle>
      <Gnb className="menu">
        <Navigation />
      </Gnb>
      <Header className="header">
        <h2>CONTACT</h2>
      </Header>
      <Article className="article">
        <Weather />
      </Article>
      <Main className="main">
        <Form />
      </Main>
      <Explane className="explane">
        <span
          style={{
            display: "block",
            textAlign: "center",
            fontSize: "40px",
            margin: "100px 0",
          }}
        >
          Thanks
          <br /> For
          <br /> Reading!
        </span>
      </Explane>
    </GlobalStyle>
  );
}

export default Contact;
