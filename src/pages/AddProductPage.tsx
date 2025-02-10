// src/pages/AddProductPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SidebarProductos from '../components/Sidebar';
import '../styles/AddProductPage.css';
import { useProductos, Product } from '../hooks/useProductos'; // Importa el hook useProductos y la interfaz Product

const AddProductPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    stock: '',
    user: ''
  });

  const navigate = useNavigate();
  const { addProduct, loading, error } = useProductos(''); // Usa el hook useProductos

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Convertir price y stock a números
      const newProduct: Omit<Product, 'id'> = { // Omitimos el ID porque el backend lo genera
        name: formData.name,
        description: formData.description,
        price: parseFloat(formData.price),
        category: formData.category,
        stock: parseInt(formData.stock, 10),
        user: formData.user
      } as Omit<Product, 'id'>;

      await addProduct(newProduct); // Llama a la función addProduct del hook
      navigate('/productos'); // Redirige a la lista de productos
    } catch (err: any) {
      console.error('Error al crear producto:', err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCancel = () => {
    navigate('/productos');
  };

  return (
    <div className="app-container">
      <SidebarProductos />
      <div className="main-content">
        <div className="header">
          <h1>AGREGAR PRODUCTO</h1>
        </div>
        <div className="form-container">
          <form className="product-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre del producto</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Descripción</label>
              <input
                type="text"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="price">Precio</label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">Categoría</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">Selecciona categoría</option>
                <option value="electronics">Electrónica</option>
                <option value="clothing">Mueble</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="stock">Stock</label>
              <input
                type="number"
                id="stock"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="user">Usuario</label>
              <input
                type="text"
                id="user"
                name="user"
                value={formData.user}
                onChange={handleChange}
              />
            </div>

            <div className="form-actions">
              <button type="button" className="cancel-button" onClick={handleCancel}>
                Cancelar
              </button>
              <button type="submit" className="submit-button" disabled={loading}>
                {loading ? 'Guardando...' : 'Guardar'}
              </button>
              {error && <p className="error-message">Error: {error}</p>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;
