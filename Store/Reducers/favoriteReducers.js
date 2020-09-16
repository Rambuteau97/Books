const initialState = { favoritesBar: [] };

function toggleFavorite(state = initialState, action) {
  let nextState;
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      const favoriteBarIndex = state.favoritesBar.findIndex((item) => item.id === action.value.id);
      if (favoriteBarIndex !== -1) {
        //suppression du bar
        nextState = {
          ...state,
          favoritesBar: state.favoritesBar.filter((item, index) => index !== favoriteBarIndex),
        };
      } else {
        //ajoute le bar
        nextState = {
          ...state,
          favoritesBar: [...state.favoritesBar, action.value],
        };
      }
      return nextState || state;
    default:
      return state;
  }
}

export default toggleFavorite;
