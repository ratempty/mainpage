import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Navigate() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <ul>
      <li
        onClick={() => {
          navigate("/");
        }}
        className={location.pathname === "/" ? "active" : ""}
      >
        Home
      </li>
      <li
        onClick={() => {
          navigate("/Skill");
        }}
        className={location.pathname === "/Skill" ? "active" : ""}
      >
        Skill
      </li>
      <li
        onClick={() => {
          navigate("/Project");
        }}
        className={location.pathname === "/Project" ? "active" : ""}
      >
        Project
      </li>
      <li
        onClick={() => {
          navigate("/Contact");
        }}
        className={location.pathname === "/Contact" ? "active" : ""}
      >
        Contact
      </li>
    </ul>
  );
}

export default Navigate;
