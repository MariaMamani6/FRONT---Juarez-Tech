// pages/ProductPage.tsx
import { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import SidebarProductos from '../components/Sidebar';
import '../styles/ProductPage.css';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  user: string;
}

const ProductPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Lista de productos estática con datos completos
  const products: Product[] = [
    {
      id: '01',
      name: 'Laptop Pro',
      description: 'Descripcion 1',
      price: 1200.0,
      category: 'Electronica',
      stock: 50,
      user: 'Admin'
    },
    {
      id: '02',
      name: 'Silla Ergonomica',
      description: 'Descripcion 2',
      price: 250.0,
      category: 'Mueble',
      stock: 100,
      user: 'User 1'
    },
    {
      id: '03',
      name: 'Mouse',
      description: 'Descripcion 3',
      price: 25.0,
      category: 'Electronica',
      stock: 200,
      user: 'user 2'
    },
    {
      id: '04',
      name: 'Notebook A5',
      description: 'Descripcion 4',
      price: 5.0,
      category: 'Electronica',
      stock: 500,
      user: 'Admin'
    },
    {
      id: '05',
      name: 'External SSD 1TB',
      description: 'Descripcion 5',
      price: 180.0,
      category: 'Electronica',
      stock: 75,
      user: 'user 3'
    }
  ];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      {/* Sidebar a la izquierda */}
      <SidebarProductos />

      <div className="main-content">
        <header className="header">
          <h1>PRODUCTOS</h1>
        </header>

        <div className="content">
          <div className="actions">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Buscar producto..."
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
            <button className="add-button">Agregar</button>
          </div>

          {/* Contenedor con scroll horizontal en caso de que el ancho sea menor al requerido */}
          <div className="table-scroll">
            <div className="product-table">
              <div className="table-header">
                <div className="column-id">ID</div>
                <div className="column-name">Producto</div>
                <div className="column-description">Descripcion</div>
                <div className="column-price">Precio</div>
                <div className="column-category">Categoria</div>
                <div className="column-stock">Stock</div>
                <div className="column-actions">Acciones</div>
              </div>

              {filteredProducts.map((product) => (
                <div key={product.id} className="product-row">
                  <div className="column-id">{product.id}</div>
                  <div className="column-name">{product.name}</div>
                  <div className="column-description">{product.description}</div>
                  <div className="column-price">$ {product.price}</div>
                  <div className="column-category">{product.category}</div>
                  <div className="column-stock">{product.stock}</div>
                  <div className="column-actions">
                    <button className="edit-button">
                      <FaEdit />
                    </button>
                    <button className="delete-button">
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Fin contenedor scroll */}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
