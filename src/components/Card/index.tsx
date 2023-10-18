import { Container } from './styles'

export function Card() {

  const date = new Date()
  date.setDate(date.getDate() - 7)

  const formattedDate = date
    .toISOString()
    .split('T')[0]
    .split('-')
    .reverse()
    .join('/')

  return (
    <Container>
      <section>
        <header>
          <h4>Quantidade</h4>
        </header>
        <strong>5 Repositórios </strong>
        <p>desde {formattedDate}</p>
      </section>
    </Container>
  )
}
