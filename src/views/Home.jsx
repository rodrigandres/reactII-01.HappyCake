import { Container } from 'react-bootstrap';
import cakeImage from '../assets/img/cake.png';

function Home() {
  return ( 
    <Container className='text-center my-5'>
      <h1>
        Bienvenido a <span className='fw-bold'>Happy Cake</span>
      </h1>
      <p className='mt-3'>El lugar de los pasteles felices</p>
      <img src= {cakeImage} alt="cake" width={100} />
    </Container>
  )
}

export default Home
