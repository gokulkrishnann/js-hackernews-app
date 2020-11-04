import React, { useContext, useEffect, useReducer } from "react";
import * as actionTypes from "./actions";
import reducer from "./reducer";

const APIENDPOINT = "https://hn.algolia.com/api/v1/search?";

const initialState = {
  isLoading: true,
  hits: [],
  query: "frontend",
  page: 1,
  nbPages: 1,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getStories = async (url) => {
    dispatch({ type: actionTypes.SET_LOADING });
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      dispatch({
        type: actionTypes.SET_STORIES,
        payload: { hits: data.hits, nbPages: data.nbPages },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteStory = (id) => {
    dispatch({ type: actionTypes.DELETE_STORY, payload: id });
  };

  const handlePage = (value) => {
    dispatch({ type: actionTypes.HANDLE_PAGE, payload: value });
  };

  const handleSearch = (value) => {
    dispatch({ type: actionTypes.HANDLE_SEARCH, payload: value });
  };

  useEffect(() => {
    getStories(`${APIENDPOINT}query=${state.query}&page=${state.page}`);
  }, [state.page, state.query]);

  return (
    <AppContext.Provider
      value={{ ...state, getStories, deleteStory, handlePage, handleSearch }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
