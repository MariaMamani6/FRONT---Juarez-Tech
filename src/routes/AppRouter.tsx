// src/routes/AppRouter.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from '../pages/ProductPage'; 
import LoginPage from '../pages/LoginPage';
import AddProductPage from '../pages/AddProductPage';
import RegisterPage from '../pages/RegisterPage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/productos" element={<ProductPage />} />
        <Route path="/agregar" element={<AddProductPage />} />
        <Route path="/registrar" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
