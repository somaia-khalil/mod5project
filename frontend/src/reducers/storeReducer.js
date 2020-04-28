export default function storeReducer(
    state = {
      stores: [],
      cart: []
    },
    action
  ) {
    //   console.log(action)
    switch (action.type) {
      case 'SAVE_STORES':
        return {
          ...state,
          stores: action.stores
        }
      case 'saveToCart':
        return{
          ...state,
          cart: [...state.cart,action.offer]
        }
   
      default:
        return state;
    }
  }