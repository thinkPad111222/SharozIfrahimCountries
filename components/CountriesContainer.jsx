import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

export default function CountriesContainer({ query }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="countries-container">
      {data
        .filter(
          (country) =>
            country.name.common.toLowerCase().includes(query.toLowerCase()) ||
            country.region.toLowerCase().includes(query.toLowerCase())
        )
        .map((country) => (
          <CountryCard
            key={country.name.common}
            imgUrl={country.flags.svg}
            title={country.name.common}
            population={country.population.toLocaleString("en-IN")}
            region={country.region}
            capital={country.capital?.[0]}
            countryData={country}
          />
        ))}
    </div>
  );
}
