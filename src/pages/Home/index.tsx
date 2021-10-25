import illustrationImage from '../../assets/images/illustration.svg';
// import Login from '../../components/Login';
import NewRoom from '../../components/NewRoom';

import { AsideContainer, Container, MainContainer } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <AsideContainer>
        <img src={illustrationImage} alt="Illustration" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </AsideContainer>
      <MainContainer>
        <NewRoom />
      </MainContainer>
    </Container>
  );
};

export default Home;
