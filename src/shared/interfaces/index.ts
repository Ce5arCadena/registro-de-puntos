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
        rol: string;
    }
}

export interface JwtPayload {
    email:  string;
    name:   string;
    school: null;
    sub:    number;
    rol:    string;
    iat:    number;
    exp:    number;
}