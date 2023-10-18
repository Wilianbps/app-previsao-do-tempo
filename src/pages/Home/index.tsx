import { FormEvent, useState } from "react";
import { api } from "../../services/api/axios";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { ContainerHome, ContentHome, SearchFormContainer } from "./styles";

export function Home() {
  const [infoWeatherOfCity, setinfoWeatherOfCity] = useState([]);
  const [city, setCity] = useState("");

  const apyKey = import.meta.env.VITE_API_KEY;

  async function handlefetchWeatherByCity(e: FormEvent) {
    e.preventDefault();
    const response = await api.get("", {
      params: { q: `${city}`, appid: apyKey, lang: "pt_br" },
    });

    setinfoWeatherOfCity(response.data);
    setCity("")
  }

  return (
    <ContainerHome>
      <Header />
      <Card />
      <ContentHome>
        <SearchFormContainer onSubmit={handlefetchWeatherByCity}>
          <input
            type="text"
            placeholder="Informe a cidade"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit">Buscar</button>
        </SearchFormContainer>
      </ContentHome>
    </ContainerHome>
  );
}
