// src/hooks/useProductos.ts
import { useState, useEffect } from 'react';

const API_BASE_URL = 'https://dev.cjtech.me/routes';

// Define una interfaz para los productos
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  user: string;
}

interface UseProductosResult { // Define la interfaz para el hook
  products: Product[];
  loading: boolean;
  error: string | null;
  addProduct: (productData: Omit<Product, 'id'>) => Promise<Product>; // Omitimos 'id' porque el backend lo genera
  deleteProduct: (id: string) => Promise<void>;
}

export const useProductos = (searchTerm: string): UseProductosResult => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        let url = `${API_BASE_URL}/productos/`;

        // Si hay un término de búsqueda, agregarlo a la URL
        if (searchTerm) {
          url += `?buscar=${searchTerm}`;
        }

        const response = await fetch(url, {
          method: 'GET',
          credentials: 'include', // Incluye las cookies si es necesario
        });

        if (!response.ok) {
          throw new Error('Error al obtener los productos');
        }

        const data = await response.json();

        // Verifica si la respuesta es un array
        if (Array.isArray(data)) {
          setProducts(data);
        } else if (data) {
          // Si no es un array, intenta convertirlo en un array
          setProducts([data]);
        } else {
          setProducts([]); // Establece la lista de productos como vacía si no hay datos
        }
      } catch (err: any) {
        setError(err.message || 'Error al obtener los productos');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [searchTerm]);

  // Función para eliminar un producto
  const deleteProduct = async (id: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/productos/?id=${id}`, {
        method: 'DELETE',
        credentials: 'include', // Incluye las cookies si es necesario
      });

      if (!response.ok) {
        throw new Error('Error al eliminar el producto');
      }

      // Actualiza la lista de productos después de eliminar
      setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
    } catch (err: any) {
      setError(err.message || 'Error al eliminar el producto');
    } finally {
      setLoading(false);
    }
  };

  // Función para agregar un producto
  const addProduct = async (productData: Omit<Product, 'id'>): Promise<Product> => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/productos/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
        credentials: 'include', // Incluye las cookies si es necesario
      });

      if (!response.ok) {
        const errorData = await response.json(); // Intenta obtener más detalles del error del backend
        throw new Error(errorData.message || 'Error al agregar el producto');
      }

      const newProduct: Product = await response.json();
      setProducts((prevProducts) => [...prevProducts, newProduct]); // Actualiza la lista de productos
      return newProduct;
    } catch (err: any) {
      setError(err.message || 'Error al agregar el producto');
      throw err; // Re-lanzamos el error para que lo capture el componente
    } finally {
      setLoading(false);
    }
  };

  return { products, loading, error, addProduct, deleteProduct };
};
