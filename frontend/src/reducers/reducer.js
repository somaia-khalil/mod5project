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
      stores: [],
      cart: [],
      user: null,
      showLoginModal: false,
      showRegisterModal: false,
    },
    action
  ) {
    switch (action.type) {

      case 'SAVE_STORES':
        return {
          ...state,
          stores: action.stores
        }

      case 'SAVE_TO_CART': console.log(action)
        return {
          ...state,
          cart: [...state.cart , action.offer]
        }

      case 'REGISTER':  //TODO
        return {
          ...state,
          user: {email: "sd"}
        }

      case 'LOGIN': //TODO
        return {
          ...state,
          user: {email: "sd"}
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
   
      default:
        return state;
    }
  }
