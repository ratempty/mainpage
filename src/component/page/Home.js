import React from "react";
import {
  GlobalStyle,
  Gnb,
  Header,
  Main,
  Article,
  Explane,
} from "../style/style";
import Navigation from "../content/Navigation";
import Weather from "../content/Weather";

function Home() {
  return (
    <GlobalStyle>
      <Gnb>
        <Navigation />
      </Gnb>
      <Header className="header">
        <h2>ABOUT</h2>
      </Header>
      <Article className="article">
        <Weather />
      </Article>
      <Main className="main" $padding="100px 100px">
        <h3>프론트엔드 개발자</h3>
        <p>
          안녕하세요 디버깅에서 즐거움을 느끼며 코딩하는 신입 프론트엔드 개발자
          강다빈입니다. 끊임없이 변화하는 웹 개발 분야에서 뛰어난 커뮤니케이션과
          문제 해결 능력을 바탕으로 협업을 추구합니다. 함께 협력하여 사용자들의
          일상을 더욱 풍요롭게 만들어갈 기회를 기다리고 있습니다. 감사합니다.
        </p>
      </Main>
      <Explane className="explane">
        <div className="myInfo">
          <p>이름 : 강다빈</p>
          <p>주소 : 경기도 안산시</p>
          <p>생년월일 : 1997.01.12</p>
          <p>이메일 : rateallempty@naver.com </p>
        </div>
      </Explane>
    </GlobalStyle>
  );
}

export default Home;
