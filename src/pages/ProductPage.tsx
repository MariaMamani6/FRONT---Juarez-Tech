// src/pages/ProductPage.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import SidebarProductos from '../components/Sidebar';
import '../styles/ProductPage.css';
import { useProductos, Product } from '../hooks/useProductos';

const ProductPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // Se asume que useProductos devuelve products, loading, error y deleteProduct
  const { products, loading, error, deleteProduct } = useProductos(searchTerm);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleAddProduct = () => {
    navigate('/agregar'); // Redirige a la página para agregar un producto
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteProduct(id);
      // Se asume que deleteProduct actualiza la lista de productos
    } catch (err: any) {
      console.error('Error deleting product:', err);
    }
  };

  return (
    <div className="app-container">
      {/* Sidebar a la izquierda */}
      <SidebarProductos />

      {/* Contenido principal */}
      <div className="main-content">
        <header className="header">
          <h1>PRODUCTOS</h1>
        </header>

        <div className="content">
          <div className="actions">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search product..."
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
            <button className="add-button" onClick={handleAddProduct}>
              Agregar
            </button>
          </div>

          {loading ? (
            <p>Loading products...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <div className="table-scroll">
              <div className="product-table">
                <div className="table-header">
                  <div className="column-id">ID</div>
                  <div className="column-name">Product</div>
                  <div className="column-description">Description</div>
                  <div className="column-price">Price</div>
                  <div className="column-category">Category</div>
                  <div className="column-stock">Stock</div>
                  <div className="column-actions">Actions</div>
                </div>

                {products.map((product: Product) => (
                  <div key={product.id} className="product-row">
                    <div className="column-id">{product.id}</div>
                    <div className="column-name">{product.name}</div>
                    <div className="column-description">{product.description}</div>
                    <div className="column-price">$ {product.price}</div>
                    <div className="column-category">{product.category}</div>
                    <div className="column-stock">{product.stock}</div>
                    <div className="column-actions">
                      <button
                        className="edit-button"
                        onClick={() => navigate(`/editar/${product.id}`)}
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="delete-button"
                        onClick={() => handleDelete(product.id)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
