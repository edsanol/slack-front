import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChangePassword } from './pages/ChangePassword';
import { LandingPage } from './pages/LandingPage';
import { Login } from './pages/Login';
import { RecoverPassword } from './pages/RecoverPassword';
import { Register } from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/change-password" element={<ChangePassword />} />
        <Route exact path="/recover-password" element={<RecoverPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
