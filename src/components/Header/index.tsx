import { Container, Content } from './styles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureHalf } from "@fortawesome/free-solid-svg-icons/faTemperatureHalf";

export function Header() {
 
  return (
    <Container>
      <Content>
        <div className="logo">
        <FontAwesomeIcon icon={faTemperatureHalf} color='#E39144'/>
          
          <span>weather_explorer</span>
        </div>
        <button type="button" >
          Meus Favoritos
        </button>
      </Content>

     
    </Container>
  )
}
