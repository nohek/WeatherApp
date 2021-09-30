import React, { useState, FormEvent } from 'react';
import { SearchBox, Container, LocationBox, WeatherBox } from './styles';

interface Props {
  api: {
    base: string;
    key: string;
  }
}

const api = {
  key: "9581ff54fbd4d751d3d9b2c1051505fc",
  base: "https://api.openweathermap.org/data/2.5"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = (evt: Props) => {
    if (evt.api.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metrics&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
        })
    }
  }

  const dateBuilder = (d: Date) => {
    let months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    let days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

    let day = days[d.getDay()]; //devolve um numero de 0 a 11
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <Container>
      <main>
        <SearchBox>
          <input
            type="text"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </SearchBox>

        <LocationBox>
          <div className="location">
            Uberlândia, MG
          </div>
          <div className="date">
            {dateBuilder(new Date())}
          </div>
        </LocationBox>

        <WeatherBox>
          <div className="temp">
            15°C
          </div>
          <div className="weather">
            Sunny
          </div>
        </WeatherBox>
      </main>
    </Container>
  );
}

export default App;
