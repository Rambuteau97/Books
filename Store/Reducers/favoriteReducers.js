const initialState = { favoritesBars: [] };

function toggleFavorite(state = initialState, action) {
  let nextState;
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      const favoriteBarIndex = state.favoritesBars.findIndex((item) => item.id === action.value.id);
      if (favoriteBarIndex !== -1) {
        //suppression du bar
        nextState = {
          ...state,
          favoritesBars: state.favoritesBars.filter((item, index) => index !== favoriteBarIndex),
        };
      } else {
        //ajoute le bar
        nextState = {
          ...state,
          favoritesBars: [...state.favoritesBars, action.value],
        };
      }
      return nextState || state;
    default:
      return state;
  }
}

export default toggleFavorite;
