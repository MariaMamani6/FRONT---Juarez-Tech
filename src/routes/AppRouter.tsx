import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from '../pages/ProductPage'; // Asegúrate de importar tus componentes
import LoginPage from '../pages/LoginPage';
import AddProductPage from '../pages/AddProductPage';
import RegisterPage from '../pages/RegisterPage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<LoginPage />} />

        {/* Otras rutas */}
        <Route path="/productos" element={<ProductPage />} />
        <Route path="/Agregar" element={<AddProductPage />} />
        <Route path="/Registrar" element={<RegisterPage />} />
        {/* Agrega más rutas según sea necesario */}
      </Routes>
    </Router>
  );
};

export default AppRouter;