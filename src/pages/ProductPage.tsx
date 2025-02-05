// pages/ProductPage.tsx
import { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import SidebarProductos from '../components/Sidebar';
import '../styles/ProductPage.css';


interface Producto {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: string;
  stock: number;
}

const ProductPage = () => {
  const [terminoBusqueda, establecerTerminoBusqueda] = useState('');
  const [productos] = useState<Producto[]>([
    { id: '01', nombre: 'Producto 1' },
    { id: '02', nombre: 'Producto 2' },
    { id: '03', nombre: 'Producto 3' },
  ]);

  const manejarBusqueda = (e: React.ChangeEvent<HTMLInputElement>) => {
    establecerTerminoBusqueda(e.target.value);
  };

  return (
    <div className="app-container">
      <SidebarProductos />
      
      <div className="main-content">
        <header className="header">
          <h1>PRODUCTOS</h1>
        </header>

        <div className="content">
          <div className="acciones">
            <div className="buscador">
              <input
                type="text"
                placeholder="Buscar producto..."
                value={terminoBusqueda}
                onChange={manejarBusqueda}
              />
            </div>
            <button className="boton-agregar">
              Agregar
            </button>
          </div>

          <div className="tabla-productos">
            <div className="encabezado-tabla">
              <div className="columna-id">ID</div>
              <div className="columna-nombre">Producto</div>
              <div className="columna-descripcion">Descripción</div>
              <div className="columna-precio">Precio</div>
              <div className="columna-categoria">Categoria</div>
              <div className="columna-stock">Stock</div>
              <div className="columna-acciones">Acciones</div>
            </div>

            {productos.map((producto) => (
              <div key={producto.id} className="fila-producto">
                <div className="columna-id">{producto.id}</div>
                <div className="columna-nombre">{producto.nombre}</div>
                <div className="columna-nombre">{producto.descripcion}</div>
                <div className="columna-nombre">{producto.precio}</div>
                <div className="columna-nombre">{producto.categoria}</div>
                <div className="columna-nombre">{producto.stock}</div>
                <div className="columna-acciones">
                  <button className="boton-editar">
                    <FaEdit />
                  </button>
                  <button className="boton-eliminar">
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;