export default function storeReducer(
    state = {
      stores: []
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
   
      default:
        return state;
    }
  }