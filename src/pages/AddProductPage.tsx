// pages/AddProductPage.tsx
import React, { useState } from 'react';
import SidebarProductos from '../components/Sidebar';
import '../styles/AddProductPage.css';

const AddProductPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        stock: '',
        user: ''
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
                            <label htmlFor="description">Descripcion</label>
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
                            <label htmlFor="category">Categoria</label>
                            <select id="category" name="category" value={formData.category} onChange={handleChange}>
                                <option value="">Selecciona categoria</option>
                                <option value="electronics">Electronica</option>
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
                            <button type="button" className="cancel-button">Cancelar</button>
                            <button type="submit" className="submit-button">Guardar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProductPage;
