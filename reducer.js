const initialState = {
    products: [],
    totalPrice: 0,
  };


  export default function basketReducer(state = initialState, action) {
    const handleSumTotal = () => {
        const reducer = (acumulator, currentValue) => acumulator + currentValue.price
        const sum = state.products.reduce(reducer, 0)
        return sum
    }
      switch (action.type) {
      case "ADD_PRODUCT_TO_BASKET":
        let flagAdd = false
        state = {
            ...state,
            products: state.products.map(product => {
            if(product.id === action.payload.id){
                flagAdd = true
                product.quantity = product.quantity + 1
            }
            return product
        })}
        state = {
            ...state,
            products:  flagAdd ? [...state.products] : [...state.products, action.payload]
        }
        state.totalPrice = handleSumTotal()
        return state
      case "REMOVE_PRODUCT_FROM_BASKET":
        let flagDelete = false
        state = {
            ...state,
            products: state.products.map(product => {
            if(product.id === action.payload.productId){
                product.quantity = product.quantity - 1
                flagDelete = product.quantity === 0 ? false : true
            }
            return product
        })}
        state = {
            ...state,
            products:  flagDelete ? [...state.products] : state.products.filter(items => items.id !== action.payload.productId)
        }
        state.totalPrice = handleSumTotal()
        return state
      default:
        return state;
    }
  }