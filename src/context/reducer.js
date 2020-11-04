import * as actionTypes from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_STORIES:
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };
    case actionTypes.DELETE_STORY:
      return {
        ...state,
        hits: state.hits.filter((story) => story.objectID !== action.payload),
      };
    case actionTypes.HANDLE_PAGE:
      if (action.payload === "inc") {
        let nextPage = state.page + 1;
        if (nextPage > state.nbPages) {
          nextPage = 1;
        }
        return { ...state, page: nextPage };
      } else if (action.payload === "dec") {
        let prevPage = state.page - 1;
        if (prevPage < 0) {
          prevPage = state.nbPages - 1;
        }
        return { ...state, page: prevPage };
      }
      break;
    case actionTypes.HANDLE_SEARCH: {
      return {
        ...state,
        query: action.payload,
        page: 1,
      };
    }
    case actionTypes.SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    default:
      throw new Error(`no matching ${action.type} found`);
  }
};

export default reducer;
