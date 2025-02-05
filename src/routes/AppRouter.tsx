import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from '../pages/ProductPage'; // Asegúrate de importar tus componentes
import LoginPage from '../pages/LoginPage';
import AddProductPage from '../pages/AddProductPage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<LoginPage />} />

        {/* Otras rutas */}
        <Route path="/productos" element={<ProductPage />} />
        <Route path="/Agregar" element={<AddProductPage />} />
        {/* Agrega más rutas según sea necesario */}
      </Routes>
    </Router>
  );
};

export default AppRouter;