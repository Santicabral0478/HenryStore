export interface IUserData {
    email: string;
    password: string;
}

export interface AuthFormProps {
    token: string | null;
    setToken: React.Dispatch<React.SetStateAction<string | null>>;
}