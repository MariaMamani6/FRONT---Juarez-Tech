// components/SidebarProductos.tsx
import { Link, useLocation } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { MdOutlineInventory } from "react-icons/md";
import '../styles/Sidebar.css';

const SidebarProductos = () => {
  const location = useLocation();

  const menuItems = [
    {
      nombre: "Productos",
      icono: <MdOutlineInventory size={20} />,
      ruta: "/productos",
    },

    {
      nombre: "Categoria",
      icono: <MdOutlineInventory size={20} />,
      ruta: "/productos",
    },
   
    {
      nombre: "Productos",
      icono: <MdOutlineInventory size={20} />,
      ruta: "/productos",
    },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src="/logo.png" alt="Logo" className="sidebar-logo" />
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <Link
            key={item.nombre}
            to={item.ruta}
            className={`sidebar-item ${
              location.pathname === item.ruta ? "active" : ""
            }`}
          >
            {item.icono}
            <span>{item.nombre}</span>
          </Link>
        ))}

        {/* Botón de cerrar sesión */}
        <button className="logout-button">
          <FaTrash size={18} />
          <span>Cerrar sesión</span>
        </button>
      </nav>
    </div>
  );
};

export default SidebarProductos;