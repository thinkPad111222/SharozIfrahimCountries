import React from "react";
import { Link } from "react-router-dom";

export default function CountryCard({
  imgUrl,
  title,
  population,
  region,
  capital,
  countryData,
}) {
  return (
    <Link className="country-card" to={`${title}`} state={countryData}>
      <img src={imgUrl} alt={`${title} flag`} />
      <div className="card-text">
        <h3 className="card-title">{title}</h3>
        <p>
          <b>Population: </b>
          {population}
        </p>
        <p>
          <b>Region: </b>
          {region}
        </p>
        <p>
          <b>Capital: </b>
          {capital}
        </p>
      </div>
    </Link>
  );
}
