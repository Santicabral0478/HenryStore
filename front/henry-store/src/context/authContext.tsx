"use client"
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface AuthContextType {
    token: string | null;
}

const AuthContext = createContext<AuthContextType | null>(null);

// proveedor de autenticación que envolverá a la aplicación
export function AuthProvider({ children }: { children: ReactNode }) {
    const [token, setToken] = useState<string | null>(null);

    // Efecto que corre solo en el cliente para obtener el token desde localStorage
    useEffect(() => {
        const storedToken = localStorage.getItem('userToken');
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ token }}>
            {children} 
        </AuthContext.Provider>
    );
}

// Hook para usar el contexto de autenticación en los componentes
export function useAuth(): AuthContextType | null {
    return useContext(AuthContext);
}

//Forma de uso:::----

//  1)... import { useAuth } from '@/context/authContext';

//  2) ...Traer de el context el token del usuario 
//        const auth = useAuth(); 
//        const token = auth ? auth.token : null;



