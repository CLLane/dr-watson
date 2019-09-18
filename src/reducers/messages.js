export const messages = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MESSAGE': 
      return [action.message]
    case 'CLEAR_MESSAGE':
      return [action.message]
    default:
      return state;
  }
}