import React, { useRef, useState } from "react";
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

function Project() {
  const [chkScroll, setChkScroll] = useState(0);
  const [viewIndex, setViewIndex] = useState(0);
  const [btnAble, setBtnAble] = useState(false);
  const [fade, setFade] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 });
  const [imgCount, setImgCount] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 });
  const maxCount = { 0: 3, 1: 4, 2: 1, 3: 2, 4: 3 };
  const projectArr = [
    { id: 0, img: `/img/mainpage.png`, count: imgCount[0], fadeState: fade[0] },
    {
      id: 1,
      img: `/img/ratemarket.png`,
      count: imgCount[1],
      fadeState: fade[1],
    },
    { id: 2, img: `/img/game.png`, count: imgCount[2], fadeState: fade[2] },
    { id: 3, img: `/img/todolist.png`, count: imgCount[3], fadeState: fade[3] },
    { id: 4, img: `/img/asiana.png`, count: imgCount[4], fadeState: fade[4] },
  ];
  const exArr = [
    {
      id: 0,
      title: "Mainpage",
      date: "08.20 ~ 08.30",
      ex: "리액트로 만든 개인 포트폴리오 메인 페이지입니다. 구현된 기능으로는 라우트를 사용한 페이지 이동 , axios를 사용한 api 통신으로 날씨정보 받아오기 , formspree를 사용한 이메일 받기 등으로 이루어진 SPA입니다.",
      href: "",
    },
    {
      id: 1,
      title: "Rate - Market",
      date: "09.01 ~ 09.13",
      ex: "구글의 firebase를 데이터베이스로 사용한 중고물품 거래 사이트입니다. 로그인기능과 글 작성 , 찜하기 , 판매자에게 메세지 보내기 등으로 제작했습니다.",
      href: "",
    },
    {
      id: 2,
      title: "Caterpillars",
      date: "07/31 ~ 08/05",
      ex: "순수 javascript로 만든 레트로 지렁이 게임입니다. 지렁이를 이동시키면서 생성된 먹이를 먹고 몸 길이를 늘려나가는 2D게임입니다. ",
      href: "https://ratempty.github.io/game/",
    },
    {
      id: 3,
      title: "Todo-List",
      date: "08.07 ~ 08.19",
      ex: "리액트로 만든 투두리스트입니다. 카테고리 선택 등록 ,카테고리 별 보기 , 해야할 일의 완료 및 고정과 삭제 , 날짜선택 등의 기능을 구현했습니다.",
      href: "",
    },
    {
      id: 4,
      title: "Asiana airline",
      date: "06.01 ~ 07.30",
      ex: "코딩 시작 2개월차의 첫 프로젝트입니다. 아시아나 항공사의 메인페이지를 리뉴얼하며 반응형으로 제작했습니다. HTML , CSS , JAVASCRIPT 로만 이루어진 사이트로 swiper와 slick 등 라이브러리를 사용해서 배너의 움직임을 구현했습니다.",
      href: "",
    },
  ];
  const handleScroll = (e) => {
    const nowScroll = e.target.scrollTop;
    const itemHeight = e.target.getBoundingClientRect().height;
    const nowIndex = Math.round(nowScroll / itemHeight);
    const nowProject = projectArr[nowIndex];
    setViewIndex(nowProject.id);
    setChkScroll(nowScroll);
  };
  const nextView = (id) => {
    if (imgCount[id] < maxCount[id]) {
      setFade((prev) => ({ ...prev, [id]: 1 }));
      setBtnAble(true);
      setImgCount((prev) => ({ ...prev, [id]: prev[id] + 1 }));
      setTimeout(() => {
        setFade({ 0: 0, 1: 0, 2: 0, 3: 0 });
        setBtnAble(false);
      }, 400);
    }
  };
  const prevView = (id) => {
    if (imgCount[id] > 0) {
      setFade((prev) => ({ ...prev, [id]: 1 }));
      setBtnAble(true);
      setImgCount((prev) => ({ ...prev, [id]: prev[id] - 1 }));
      setTimeout(() => {
        setFade({ 0: 0, 1: 0, 2: 0, 3: 0 });
        setBtnAble(false);
      }, 400);
    }
  };
  return (
    <GlobalStyle>
      <Gnb className="menu">
        <Navigation />
      </Gnb>
      <Header className="header">
        <h2>PROJECT</h2>
      </Header>
      <Article className="article">
        <Weather />
      </Article>
      <Main className="main" $padding="0 50px 0">
        <ul
          onScroll={handleScroll}
          className="pjul"
          style={{
            background:
              chkScroll < 100 &&
              'url("/img/scroll.png") no-repeat center bottom 20px',
          }}
        >
          {projectArr.map((item) => (
            <li key={item.id}>
              <img
                src={`/img/${
                  item.id === 0
                    ? "mainpage"
                    : item.id === 1
                    ? "ratemarket"
                    : item.id === 2
                    ? "game"
                    : item.id === 3
                    ? "todolist"
                    : "asiana"
                }${item.count}.png`}
                alt=""
                style={{ animation: item.fadeState && "fade .4s linear" }}
              />
              <button
                onClick={() => {
                  if (!btnAble) {
                    nextView(item.id);
                  }
                }}
                className="nbtn"
                disabled={btnAble}
                style={{
                  opacity: btnAble ? ".5" : "1",
                  display:
                    maxCount[item.id] == imgCount[item.id] ? "none" : "block",
                }}
              ></button>
              <span className="pageNate">
                {imgCount[item.id] + 1} / {maxCount[item.id] + 1}
              </span>
              <button
                onClick={() => {
                  if (!btnAble) {
                    prevView(item.id);
                  }
                }}
                className="pbtn"
                disabled={btnAble}
                style={{
                  opacity: btnAble ? ".5" : "1",
                  display: 0 == imgCount[item.id] ? "none" : "block",
                }}
              ></button>
            </li>
          ))}
        </ul>
      </Main>
      <Explane className="explane">
        <ul>
          {exArr.map((item) => (
            <li
              key={item.id}
              style={{
                top: item.id === viewIndex ? "0%" : "100%",
                opacity: item.id === viewIndex ? "100%" : "0",
              }}
            >
              <div>
                <h4>{item.title}</h4>
                <p className="makeDay">작업기간 : {item.date}</p>
                <p className="textEx"> {item.ex}</p>
                <a href={item.href} target="_blank">
                  프로젝트 자세히 보기
                </a>
              </div>
            </li>
          ))}
        </ul>
      </Explane>
    </GlobalStyle>
  );
}
export default Project;
