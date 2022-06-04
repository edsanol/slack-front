import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { NotFound } from './pages/NotFound';
import { AuthRouter } from './router/AuthRouter';
import { PublicRoute } from './router/PublicRoute';
import { PrivateRoute } from './router/PrivateRoute';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { startChecking, verifyToken } from './store/actions/actionsAuth';

function App() {
  const dispatch = useDispatch();
  //
  useEffect(() => {
    dispatch(startChecking());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <LandingPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/auth/*"
          element={
            <PublicRoute>
              <AuthRouter />
            </PublicRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
