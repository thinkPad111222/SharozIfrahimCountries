import React, { useContext, useEffect, useState } from "react";
import Search from "./Search";
import Select from "./Select";
import CountriesContainer from "./CountriesContainer";

import { useTheme } from "../hooks/useTheme";

export default function Home() {
  const [isdark, setIsDark] = useTheme();
  const [query, setQuery] = useState("");

  return (
    <main className={`${isdark ? "dark" : ""}`}>
      <div className="search-filter-container">
        <Search setQuery={setQuery} />
        <Select setQuery={setQuery} />
      </div>

      <CountriesContainer query={query} />
    </main>
  );
}
