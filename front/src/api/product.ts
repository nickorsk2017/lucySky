type RequestProducts = {
    page?: number
}

type ResponseProducts = {
    data: Array<Entity.Product>,
    count: number,
    total: number,
    pageCount: number,
    page: number,
}

const api = {
    product: {
        getList: async ({page} : RequestProducts): Promise<ResponseProducts> => {
            let url = "http://localhost:3000/product";
            if(page){
                url+=`?page=${page}`
            }
            const response = await fetch(url, { cache: 'no-store' });
            const data = await response.json();
            return data;
        },
        get: async ({productId} : {productId: string}): Promise<Entity.Product> => {
            let url = `http://localhost:3000/product/${productId}`;
            const response = await fetch(url);
            const data = await response.json();
            return data;
        }
    }
}

export default api;