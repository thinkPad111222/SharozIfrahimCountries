import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

import { useTheme } from "../hooks/useTheme";

export default function Country() {
  const [isdark, setIsDark] = useTheme();
  const [country, setCountry] = useState(null);
  const params = useParams();
  const [notFound, setNotFound] = useState(false);
  const [BorderCountry, setBorderCountry] = useState(null);
  const location = useLocation();
  const state = location.state;

  const name = params.country;

  function getBorder(data) {
    if (data.borders) {
      Promise.all(
        data.borders.map((border) => {
          return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
            .then((res) => res.json())
            .then(([borderCountry]) => borderCountry.name.common);
        })
      ).then((borderNames) => {
        setBorderCountry(borderNames);
      });
    }
  }

  useEffect(() => {
    if (state) {
      setCountry(state);
      getBorder(state);
    } else {
      fetch(
        `https://restcountries.com/v3.1/name/${name.toLowerCase()}/?fullText=true`
      )
        .then((res) => res.json())
        .then(([data]) => {
          setCountry(data);
          getBorder(data);
        })
        .catch((e) => {
          setNotFound(true);
        });
    }
  }, [name]);

  if (notFound) {
    return (
      <div id="notFoundCountry">
        <h1>Country Not Found</h1>
      </div>
    );
  }

  return (
    <>
      {country === null ? (
        "loading"
      ) : (
        <main className={`${isdark ? "dark" : ""}`}>
          <div className="country-details-container">
            <span
              className="back-button"
              style={{ cursor: "pointer" }}
              onClick={() => history.back()}
            >
              <i className="fa-solid fa-arrow-left" />
              &nbsp; Back
            </span>
            <div className="country-details">
              <img src={country.flags?.svg} alt={country.name?.common} />
              <div className="details-text-container">
                <h1>{country.name?.common}</h1>
                <div className="details-text">
                  <p>
                    <b>Native Name: </b>
                    <span className="native-name">
                      {Object.values(country.name?.nativeName)[0].common}
                    </span>
                  </p>
                  <p>
                    <b>Population: </b>
                    <span className="population">
                      {country.population?.toLocaleString("en-IN")}
                    </span>
                  </p>
                  <p>
                    <b>Region: </b>
                    <span className="region">{country.region}</span>
                  </p>
                  <p>
                    <b>Sub Region: </b>
                    <span className="sub-region">{country.subregion}</span>
                  </p>
                  <p>
                    <b>Capital: </b>
                    <span className="capital">{country.capital?.[0]}</span>
                  </p>
                  <p>
                    <b>Top Level Domain: </b>
                    <span className="top-level-domain">
                      {country.tld?.join(", ")}
                    </span>
                  </p>
                  <p>
                    <b>Currencies: </b>
                    <span className="currencies">
                      {Object.values(country.currencies)
                        .map((currency) => currency.name)
                        .join(", ")}
                    </span>
                  </p>
                  <p>
                    <b>Languages: </b>
                    <span className="languages">
                      {Object.values(country.languages).join(", ")}
                    </span>
                  </p>
                </div>
                {country.borders && country.borders.length != 0 && (
                  <div className="border-countries">
                    <b>Border Countries: </b>&nbsp;
                    {BorderCountry?.map((border) => (
                      <Link key={border} to={`/${border}`}>
                        {border}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
}
