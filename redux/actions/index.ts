export const fetchProducts = (item: any) => {
    return {
      type: 'FETCH_PRODUCTS',
      payload: item,
    };
  };
  export const addRide = (item: any) => {
    return {
      type: 'ADD_RIDE',
      payload: item,
    };
  };