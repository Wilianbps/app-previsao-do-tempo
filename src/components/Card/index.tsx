import { Container } from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons/faCloud";
import { faDroplet } from "@fortawesome/free-solid-svg-icons/faDroplet";
import { faWind } from "@fortawesome/free-solid-svg-icons/faWind";

export function Card() {
  const date = new Date();
  date.setDate(date.getDate() - 7);

  /*  const formattedDate = date
    .toISOString()
    .split("T")[0]
    .split("-")
    .reverse()
    .join("/"); */

  return (
    <Container>
      <header>
        <section>
          <FontAwesomeIcon icon={faCloud} fontSize={40} />
          <p>nublado</p>
        </section>
        <section>
          <h4>Nova York, US</h4>
          <p>18/10/2023</p>
        </section>
      </header>

      <main>
        <p>25</p>
        <span> &deg;C</span>
      </main>

      <footer>
        <section className="content_footer">
          <div className="droplet">
            <FontAwesomeIcon icon={faDroplet} />
            <span>48%</span>
          </div>
          <div className="wind">
            <FontAwesomeIcon icon={faWind} />
            <span>3km/h</span>
          </div>
        </section>
        <button>Adicionar aos favoritos</button>
      </footer>
    </Container>
  );
}
