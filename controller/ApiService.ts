import endpoints from "./endpoints";

const ApiService = () => {
    const getProducts = async () => {
        try {
            let response = await fetch(endpoints.products)
            return response.json();
        }
        catch (error: any) {
            return error;
        }
    }
    return {
        getProducts
    }
}

export default ApiService;