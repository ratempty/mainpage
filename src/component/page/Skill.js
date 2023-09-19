import React, { Fragment, useState } from "react";
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

function Skill() {
  const [isHover, setIsHover] = useState(false);
  const [expSkill, setExpSkill] = useState();
  const skills = [
    {
      id: 0,
      skill: "HTML",
      icon: "/img/icons/iconHtml",
      text: "#웹표준성 #웹접근성 #구조화 #HTML5 #시멘틱태그 #마크업 #웹디자인",
    },
    {
      id: 1,
      skill: "CSS",
      icon: "/img/icons/iconCss",
      text: "#스타일링 #레이아웃 #UI디자인 #반응형디자인 #웹디자인",
    },
    {
      id: 2,
      skill: "JAVASCRIPT",
      icon: "/img/icons/iconJs",
      text: "#웹개발 #클라이언트사이드 #이벤트처리 #DOM조작 #라이브러리 #AJAX",
    },
    {
      id: 3,
      skill: "JQUERY",
      icon: "/img/icons/iconJq",
      text: "#DOM조작 #라이브러리 #웹개발도구 #이벤트핸들링 #UI개발",
    },
    {
      id: 4,
      skill: "BOOTSTRAP",
      icon: "/img/icons/iconBoot",
      text: "#라이브러리 #반응형디자인 #UI킷 #디자인컴포넌트",
    },
    {
      id: 5,
      skill: "REACT",
      icon: "/img/icons/iconReact",
      text: "#컴포넌트 #라이브러리 #UI개발 #SPA #ReactHooks",
    },
    {
      id: 6,
      skill: "AXIOS",
      icon: "/img/icons/iconAxios",
      text: "#HTTP클라이언트 #AJAX요청 #데이터통신 #웹API #네트워크요청",
    },
    {
      id: 7,
      skill: "STYLED-COMPONENTS",
      icon: "/img/icons/iconSC",
      text: "#CSS-in-JS #리액트스타일링 #컴포넌트스타일링",
    },
    {
      id: 8,
      skill: "FIREBASE",
      icon: "/img/icons/iconFirebase",
      text: "#백엔드 #Firestore #Auth #storage",
    },
    {
      id: 9,
      skill: "FIGMA",
      icon: "/img/icons/iconFIgma",
      text: "#UI디자인 #프로토타이핑 #디자인도구 #협업도구",
    },
    {
      id: 10,
      skill: "GITHUB",
      icon: "/img/icons/iconGithub",
      text: "#버전관리 #협업 #오픈소스 #코드관리",
    },
  ];
  const hoverEvt = (id) => {
    const explaneSkill = skills.filter((item) => item.id == id);
    setExpSkill(explaneSkill);
    setIsHover(true);
  };
  return (
    <GlobalStyle>
      <Gnb className="menu">
        <Navigation />
      </Gnb>
      <Header className="header">
        <h2>SKILL</h2>
      </Header>
      <Article className="article">
        <Weather />
      </Article>
      <Main className="main" $padding="100px 0">
        <div className="skillBox">
          {skills.map((item) => (
            <img
              key={item.id}
              src={`${item.icon}.png`}
              alt={item.skill}
              onMouseOver={() => hoverEvt(item.id)}
              onMouseOut={() => setIsHover(false)}
            />
          ))}
        </div>
      </Main>
      <Explane className="explane">
        <div className="exSkill">
          {isHover ? (
            expSkill.map((item) => (
              <Fragment key={item.id}>
                <img src={`${item.icon}c.png`} alt={item.skill} />
                <p>{item.text}</p>
              </Fragment>
            ))
          ) : (
            <>
              <span
                style={{
                  display: " block",
                  width: "100px",
                  height: "100px",
                  margin: " 0",
                }}
              ></span>
              <p>아이콘에 마우스를 올려보세요!</p>
            </>
          )}
        </div>
      </Explane>
    </GlobalStyle>
  );
}

export default Skill;
