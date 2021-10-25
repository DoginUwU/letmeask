import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { RoomProvider } from './contexts/RoomContext';
import { Router } from './routes/router';
import { GlobalStyles } from './styles/globalStyles';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Toaster />
      <AuthProvider>
        <RoomProvider>
          <Router />
        </RoomProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
