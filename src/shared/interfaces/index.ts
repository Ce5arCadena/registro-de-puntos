export interface LoginData {
    email: string,
    password: string
}

export interface LoginResponse {
    message: string;
    status: number;
    icon: string;
    error?: [] | '';
    data: {
        token: string;
    }
}