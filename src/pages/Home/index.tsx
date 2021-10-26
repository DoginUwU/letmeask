import illustrationImage from '../../assets/images/illustration.svg';
import Login from '../../components/Login';
import NewRoom from '../../components/NewRoom';

import { AsideContainer, Container, MainContainer } from './styles';

interface HomeProps {
  isCreateRoom?: boolean;
}

const Home: React.FC<HomeProps> = ({ isCreateRoom }: HomeProps) => {
  return (
    <Container>
      <AsideContainer>
        <img src={illustrationImage} alt="Illustration" />
        <strong>Crie salas de dúvidas ao-vivo</strong>
        <p>Tire as dúvidas das pessoas tempo-real</p>
      </AsideContainer>
      <MainContainer>{isCreateRoom ? <NewRoom /> : <Login />}</MainContainer>
    </Container>
  );
};

export default Home;
