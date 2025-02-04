const API_URL = "https://task-manager-backend-319y.onrender.com" || "http://localhost:5001";

export const apiRequest = async (endpoint, method = 'GET', body = null, token = null) => {
    const headers = { 'Content-Type': 'application/json' };
    if (token) headers['Authorization'] = `Bearer ${token}`;

    const response = await fetch(`${API_URL}/${endpoint}`, {
        method,
        headers,
        body: body ? JSON.stringify(body) : null,
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Something went wrong');
    
    return data;
};
