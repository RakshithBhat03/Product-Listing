import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducers/filterReducer";
export const filterState = {
  size: [],
  gender: "",
  brand: [],
  sortBy: "",
};
const FilterContext = createContext(filterState);
export const FilterProvider = ({ children }) => {
  const [filter, dispatch] = useReducer(filterReducer, filterState);
  return (
    <FilterContext.Provider value={{ filter, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};
export const useFilter = () => useContext(FilterContext);
