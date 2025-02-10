// src/pages/ProductPage.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import SidebarProductos from '../components/Sidebar';
import '../styles/ProductPage.css';
import { useProductos, Product } from '../hooks/useProductos'; // Import useProducts and Product interface

const ProductPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // We are not using setProducts inside this component
  const { products, loading, error, deleteProduct } = useProductos(searchTerm);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleAddProduct = () => {
    navigate('/agregar'); // Redirect to add product page
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteProduct(id);
    } catch (error: any) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="app-container">
      <SidebarProductos />

      <div className="main-content">
        <header className="header">
          <h1>PRODUCTS</h1>
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
              Add
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
                      <button className="edit-button" onClick={() => navigate(`/editar/${product.id}`)}>
                        <FaEdit />
                      </button>
                      <button className="delete-button" onClick={() => handleDelete(product.id)}>
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
