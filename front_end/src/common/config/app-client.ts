const apiClient: Axios.AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
    },
});

apiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response) {
            const { status, data } = error.response;

            switch (status) {
                case 400:
                    console.error("Bad Request:", data);
                    break;
                case 401:
                    console.error("Unauthorized - Redirecting to login");
                    // window.location.href = '/login';
                    break;
                case 403:
                    console.error("Forbidden:", data);
                    break;
                case 404:
                    console.error("Not Found:", data);
                    break;
                case 500:
                    console.error("Server Error:", data);
                    break;
                default:
                    console.error(`Error ${status}:`, data);
            }
        } else if (error.request) {
            console.error("No response received:", error.request);
        } else {
            console.error("Error in request setup:", error.message);
        }
        return Promise.reject(error);
    }
);

export default apiClient;