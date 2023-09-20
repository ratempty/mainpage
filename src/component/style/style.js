import styled from "styled-components";

export const GlobalStyle = styled.section`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(6, 1fr);
  max-width: 90vw;
  height: 90vh;
  margin: 5vh auto;
  min-width: 1440px;
  background: #e9e6e4;
  padding: 30px 0;
  box-sizing: border-box;
  font-family: "Public Sans", "LINESeedKR-Bd", sans-serif;
  nav {
    grid-column: 1/3;
    grid-row: 1/7;
  }
  .header {
    grid-column: 3/8;
    grid-row: 1/2;
    font-weight: 700;
  }
  .article {
    grid-column: 8/11;
    grid-row: 1/2;
  }
  .main {
    grid-column: 3/8;
    grid-row: 2/7;
  }
  .explane {
    grid-column: 8/11;
    grid-row: 2/7;
  }
`;

export const Gnb = styled.nav`
  ul {
    height: 100%;
    box-sizing: border-box;
    border-right: 2px solid #94918f;
    font-size: 24px;
    display: flex;
    flex-direction: column;
  }
  li {
    cursor: pointer;
    line-height: 50px;
    padding: 10px 20px;
  }
  li::after {
    content: "";
    display: block;
    height: 0;
    width: 0;
    border-bottom: 3px solid #333;
    transition: all 0.4s;
  }
  .active {
    animation-name: navAni;
    animation-duration: 0.4s;
    animation-iteration-count: 1;
    animation-fill-mode: both;
  }
  .active::after {
    animation-name: widthmove;
    animation-duration: 0.4s;
    animation-iteration-count: 1;
    animation-fill-mode: both;
  }
`;

export const Header = styled.div`
  border-right: 2px solid #94918f;
  h2 {
    font-size: 80px;
    height: 100%;
    line-height: 100%;
    width: 95%;
    border-bottom: 2px solid #94918f;
    margin: auto;
    box-sizing: border-box;
    letter-spacing: -3px;
  }
`;

export const Article = styled.article`
  .arti_wrap {
    width: 90%;
    height: 100%;
    border-bottom: 2px solid #94918f;
    margin: auto;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 30px;
    .date {
      display: flex;
      flex-flow: column wrap;
      gap: 30px;
    }
    .date span {
      align-self: flex-end;
    }
  }
  .weath {
    width: 150px;
    img {
      width: 50px;
      height: 50px;
      padding: 0 10px;
      margin-left: 10px;
    }
    p {
      position: relative;
      .nowTem {
        margin-left: 10px;
        font-size: 1.5em;
      }
    }
    button {
      width: 20px;
      height: 20px;
      background: url("/img/reload.png") no-repeat center center;
      background-size: cover;
      position: absolute;
      right: 10px;
      top: 4px;
      cursor: pointer;
    }
  }
`;

export const Main = styled.main`
  border-right: 2px solid #94918f;
  padding: ${(props) => props.$padding || "50px 50px 0 50px"};
  font-family: "SUITE-Regular", "LINESeedKR-Bd", sans-serif;
  h3 {
    font-size: 32px;
    margin-bottom: 50px;
  }
  p {
    font-size: 24px;
    font-weight: 400;
    line-height: 2;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 100%;
    margin: auto;
    gap: 30px;
    padding-top: 50px;
    input {
      width: 100%;
      height: 50px;
      border-radius: 10px;
      padding: 12px 16px;
      box-sizing: border-box;
      font-size: 16px;
      font-family: "Public Sans", "LINESeedKR-Bd", sans-serif;
      box-shadow: 3px 3px 1px 0px #22222222;
      background: #eee;
    }
    textarea {
      resize: none;
      font-family: "Public Sans", "LINESeedKR-Bd", sans-serif;
      font-size: 16px;
      width: 100%;
      height: 50%;
      border: 0 none;
      padding: 20px;
      box-sizing: border-box;
      border-radius: 10px;
      box-shadow: 3px 3px 1px 0px #22222222;
      background: #eee;
    }
    button {
      background: #fff;
      cursor: pointer;
      margin-left: auto;
      width: 120px;
      height: 40px;
      border-radius: 10px;
      font-size: 16px;
      box-shadow: 3px 3px 1px 0px #22222222;
      font-family: "Public Sans", "LINESeedKR-Bd", sans-serif;
      background: #eee;
    }
  }
  & *:focus {
    outline: none;
  }
  ul {
    height: 100%;
    overflow-y: scroll;
    img {
      box-shadow: 3px 3px 3px 0px #00000055;
    }
  }
  ul::-webkit-scrollbar {
    display: none;
  }
  .pjul li {
    border-bottom: 2px solid #94918f;
  }
  .pjul li:last-child {
    margin-bottom: 50px;
  }
  li {
    height: 100%;
    position: relative;
    box-sizing: border-box;
    img {
      width: auto;
      height: 55%;
      margin: 0 auto;
      object-fit: cover;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    button {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: url("/img/arrow.png") no-repeat center center;
      background-size: cover;
      position: absolute;
      bottom: 10%;
      cursor: pointer;
    }
    .pbtn {
      left: 40%;
      transform: translate(-50%, -50%) rotate(180deg);
    }
    .nbtn {
      right: 40%;
      transform: translate(50%, -50%);
    }
    .pageNate {
      font-size: 1.5rem;
      position: absolute;
      left: 50%;
      bottom: 10%;
      transform: translate(-50%, -80%);
    }
  }
  .skillBox {
    display: flex;
    flex-flow: row wrap;
    gap: 60px;
    justify-content: flex-start;
    margin: 0 auto;
    width: 500px;
    img {
      width: 80px;
      height: 80px;
      transition: transform 0.4s;
      opacity: 0.6;
    }
    img:hover {
      transform: scale(1.3);
      opacity: 1;
    }
  }
`;

export const Explane = styled.div`
  width: 80%;
  padding: 100px 50px;
  padding-bottom: 0;
  font-family: "SUITE-Regular", "LINESeedKR-Bd", sans-serif;
  p {
    font-weight: 400;
    font-size: 1.4em;
    word-break: keep-all;
  }
  .myInfo p {
    margin-bottom: 70px;
  }
  .makeDay {
    font-weight: 100;
    font-size: 16px;
  }
  .textEx {
    line-height: 2;
  }
  h4 {
    display: block;
    margin-bottom: 30px;
    font-weight: 900;
    font-size: 40px;
  }
  ul {
    width: 100%;
    height: 100%;
    position: relative;
    transition: all 0.8s;
    overflow: hidden;
  }
  ul::-webkit-scrollbar {
    display: none;
  }
  li {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 100%;
    transition: all 0.4s;
  }
  .exSkill {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    gap: 100px;
    padding: 40px;
    line-height: 50px;
    text-align: center;
    p {
      word-break: keep-all;
    }
    img {
      width: 150px;
      height: 150px;
    }
  }
  a {
    display: block;
    text-decoration: none;
    margin: 20px 0;
    padding: 1em 0;
    font-size: 20px;
  }
`;
