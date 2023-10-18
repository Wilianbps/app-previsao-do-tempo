import { useEffect, useState } from "react";
import { api } from "../../services/api/axios";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { ContainerHome, ContentHome } from "./styles";

export function Home() {
  const [weatherOfCity, setweatherOfCity] = useState([]);

  const apyKey = import.meta.env.VITE_API_KEY;

  async function fetchWeatherByCity() {
    const response = await api.get("", {
      params: { q: `franco da rocha`, appid: apyKey, lang: "pt_br" },
    });

    setweatherOfCity(response.data);
  }

  useEffect(() => {
    fetchWeatherByCity();
  }, []);

  console.log(weatherOfCity);

  return (
    <ContainerHome>
      <Header />
      <Card />
      <ContentHome>
        <header>
          <section>
            <input type="text" placeholder="Informe a cidade" />
            <button>Buscar</button>
          </section>
        </header>
      </ContentHome>
    </ContainerHome>
  );
}
