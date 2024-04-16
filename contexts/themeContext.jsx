import { createContext, useState } from "react";

export const ThemeContext = createContext();

import React from "react";

export default function THEMEPROVIDER({ children }) {
  const [isdark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("theme"))
  );
  return (
    <ThemeContext.Provider value={[isdark, setIsDark]}>
      {children}
    </ThemeContext.Provider>
  );
}
