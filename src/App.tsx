import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/router';
import { GlobalStyles } from './styles/globalStyles';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Router />
    </BrowserRouter>
  );
};

export default App;
