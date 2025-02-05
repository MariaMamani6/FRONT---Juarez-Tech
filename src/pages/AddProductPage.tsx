import React, { useState } from 'react';

const AgregarProductoPage = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    categoria: '',
    stock: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="app-container">
      <div className="sidebar">
        {/* Sidebar content */}
      </div>
      <div className="main-content">
        <div className="header">
          <h1>AGREGAR PRODUCTO</h1>
        </div>
        <div className="form-container">
          <form className="product-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nombre del Producto</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Descripción</label>
              <input
                type="text"
                name="descripcion"
                value={formData.descripcion}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Precio</label>
              <input
                type="number"
                name="precio"
                value={formData.precio}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Categoría</label>
              <select name="categoria" value={formData.categoria} onChange={handleChange}>
                <option value="">Seleccionar categoría</option>
                <option value="electronica">Electrónica</option>
                <option value="ropa">Ropa</option>
                <option value="hogar">Hogar</option>
              </select>
            </div>

            <div className="form-group">
              <label>Stock</label>
              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
              />
            </div>

            <div className="form-actions">
              <button type="button" className="cancel-button">Cancelar</button>
              <button type="submit" className="submit-button">Guardar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AgregarProductoPage;