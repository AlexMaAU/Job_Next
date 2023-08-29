const reducer = (state, action) => {
  if (action.type === 'SETUP_USER_SUCCESS') {
    return {
      ...state,
      user: action.payload,
    };
  }
  if (action.type === 'SETUP_USER_ERROR') {
    return {
      ...state,
      user: undefined,
      alertMessage: action.payload.msg,
    };
  }
  if (action.type === 'TOGGLE_DRAWER') {
    return {
      ...state,
      isDrawerOpen: !state.isDrawerOpen,
    };
  }

  throw new Error(`no such action: ${action.type}`);
};

export default reducer;
