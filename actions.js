export function addProductToBasket(product) {
    return {
      payload: product,
      type: "ADD_PRODUCT_TO_BASKET",
    };
  }
  
  export function removeProductFromBasket(productId) {
    return {
      payload: { productId },
      type: "REMOVE_PRODUCT_FROM_BASKET",
    };
  }
  