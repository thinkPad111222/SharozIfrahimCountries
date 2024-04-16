import React from "react";
import { useTheme } from "../hooks/useTheme";

export default function Header() {
  const [isdark, setIsDark] = useTheme();

  return (
    <header className={`header-container ${isdark ? "dark" : ""}`}>
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <p
          className="theme-changer"
          onClick={() => {
            localStorage.setItem("theme", !isdark);
            setIsDark(!isdark);
          }}
        >
          <i className={`fa-solid fa-${isdark ? "moon" : "sun"}`} />
          &nbsp;&nbsp;{isdark ? "Dark" : "Light"} Mode
        </p>
      </div>
    </header>
  );
}
