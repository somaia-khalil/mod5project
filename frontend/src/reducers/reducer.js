export default function reducer(state , action) {
  if (!state && localStorage.getItem('state'))
     state = JSON.parse(localStorage.getItem('state'))
  state = customReducer(state,action)
  localStorage.setItem('state',JSON.stringify(state))
  console.log(action)
  return state
}

function customReducer(
    state = {
      cart: [],
      wishlist: [],
      user: null,
      zipcode: "",
      showLoginModal: false,
      showRegisterModal: false,
      showZipcodeModal: false,
      showSearchModal: false,
      showErrorModal: null
    },
    action
  ) {
    switch (action.type) {

      case 'ADD_TO_WISHLIST':
        let cartItem = state.wishlist.find(offer => offer.id === action.offer.id)
        if (cartItem) {
          cartItem.amount += action.amount
           return {...state , wishlist: state.wishlist.map(offer => offer.id === action.offer.id ? {...offer,amount: action.amount} : offer) }
        }
        else return {
          ...state,
          wishlist: [...state.wishlist.filter(offer => offer.id !== action.offer.id) , {...action.offer , amount : action.amount}]
        }
        case 'DELETE_FROM_WISHLIST':
          return {
            ...state,
            wishlist: state.wishlist.filter(offer => offer.id !== action.offer.id)
          }

      case 'ADD_TO_CART':
        let item = state.cart.find(offer => offer.id === action.offer.id)
        if (item) {
           item.amount += action.amount
           return {...state , cart: state.cart.map(offer => offer.id === action.offer.id ? {...offer,amount: action.amount} : offer) }
        } 
        else return {
          ...state,
          cart: [...state.cart.filter(offer => offer.id !== action.offer.id) , {...action.offer , amount : action.amount}]
        }

      case 'DELETE_FROM_CART':
        return {
          ...state,
          cart: state.cart.filter(offer => offer.id !== action.offer.id)
        }

      case 'SAVE_ZIPCODE':
        return {
          ...state,
          zipcode: action.zipcode
        }

      case 'LOGIN': //TODO
        return {
          ...state,
          user: action.user
        }

      case 'LOGOUT':
        return {
          ...state,
          user: null
        }

      case 'OPEN_LOGIN_MODAL':
        return {
          ...state,
          showLoginModal: true
        }
      case 'CLOSE_LOGIN_MODAL':
        return {
          ...state,
          showLoginModal: false
        }

      case 'OPEN_REGISTER_MODAL':
        return {
          ...state,
          showRegisterModal: true
        }
      case 'CLOSE_REGISTER_MODAL':
        return {
          ...state,
          showRegisterModal: false
        }


      case 'OPEN_ZIPCODE_MODAL':
        return {
          ...state,
          showZipcodeModal: true
        }
      case 'CLOSE_ZIPCODE_MODAL':
        return {
          ...state,
          showZipcodeModal: false
        }
   

        case 'OPEN_ERROR_MODAL':
          return {
            ...state,
            showErrorModal: action.message
          }
        case 'CLOSE_ERROR_MODAL':
          return {
            ...state,
            showErrorModal: null
          }
     
      case 'OPEN_SEARCH_MODAL':
        return {
          ...state,
          showSearchModal: action.store
        }
      case 'CLOSE_SEARCH_MODAL':
        return {
          ...state,
          showSearchModal: null
        }
   
      default:
        return state;
    }
  }
