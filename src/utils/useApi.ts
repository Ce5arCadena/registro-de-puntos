export const useApi = async <T>(pathUrl: string = '', method = 'GET', body = {}): Promise<T> => {
    try {
        const urlBase = 'http://localhost:3000/api';
        const token = localStorage.getItem('token') || '';
        const options: RequestInit = {
            method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        };

        if (Object.keys(body).length > 0) {
            options.body = JSON.stringify(body);
        }

        const response = await fetch(`${urlBase}${pathUrl}`, options);
        const data = await response.json();

        console.log('⌛⌛⌛', data)
        return data;
    } catch (error) {
        console.log(error);
        throw new Error('Ocurrió un error al realizar la petición');  
    };
};