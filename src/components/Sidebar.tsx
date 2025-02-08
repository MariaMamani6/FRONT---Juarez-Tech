// components/SidebarProductos.tsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTrash, FaBars } from "react-icons/fa"; // Importamos FaBars para el icono de hamburguesa
import { MdOutlineInventory } from "react-icons/md";
import "../styles/Sidebar.css";

const SidebarProductos = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // Estado para abrir/cerrar el sidebar

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    console.log("Sidebar abierto:", !isOpen); // Debugging
  };

  const menuItems = [
    { nombre: "Productos", icono: <MdOutlineInventory size={20} />, ruta: "/productos" },
    
  ];

  return (
    <>
      {/* Botón de hamburguesa */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <FaBars size={24} />
      </button>

      {/* Sidebar con clases dinámicas */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <img src="/logo.png" alt="Logo" className="sidebar-logo" />
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <Link
              key={item.nombre}
              to={item.ruta}
              className={`sidebar-item ${location.pathname === item.ruta ? "active" : ""}`}
              onClick={() => setIsOpen(false)} // Cierra el sidebar al hacer clic en un enlace
            >
              {item.icono}
              <span>{item.nombre}</span>
            </Link>
          ))}

          {/* Botón de cerrar sesión */}
          <button className="logout-button" onClick={() => setIsOpen(false)}>
            <FaTrash size={18} />
            <span>Cerrar sesión</span>
          </button>
        </nav>
      </div>
    </>
  );
};

export default SidebarProductos;
