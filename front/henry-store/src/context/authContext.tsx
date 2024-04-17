"use client"
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface AuthContextType {
    token: string | null;
    login: (newToken: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

// Creamos el proveedor de autenticación que envolverá nuestra aplicación
export function AuthProvider({ children }: { children: ReactNode }) {
    const [token, setToken] = useState<string | null>(null);

    // Efecto que corre solo en el cliente para obtener el token desde localStorage
    useEffect(() => {
        const storedToken = localStorage.getItem('userToken');
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    // Función para iniciar sesión y almacenar el token
    const login = (newToken: string) => {
        localStorage.setItem('userToken', newToken);
        setToken(newToken);
    };

    // Función para cerrar sesión y eliminar el token
    const logout = () => {
        localStorage.removeItem('userToken');
        setToken(null);
    };

    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// Hook para usar el contexto de autenticación en los componentes
export function useAuth(): AuthContextType | null {
    return useContext(AuthContext);
}


