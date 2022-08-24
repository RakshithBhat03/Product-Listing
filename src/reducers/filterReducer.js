import { filterState } from "../context";

export const filterReducer = (state, { type, payload }) => {
  switch (type) {
    case "HIGH_TO_LOW":
      return { ...state, sortBy: "HIGH_TO_LOW" };
    case "LOW_TO_HIGH":
      return { ...state, sortBy: "LOW_TO_HIGH" };
    case "SIZE":
      return state.size.includes(payload)
        ? { ...state, size: state.size.filter((size) => size !== payload) }
        : { ...state, size: [...state.size, payload] };
    case "BRAND":
      return state.brand.includes(payload)
        ? { ...state, brand: state.brand.filter((brand) => brand !== payload) }
        : { ...state, brand: [...state.brand, payload] };
    case "GENDER":
      return { ...state, gender: payload };
    case "RESET":
      return { ...filterState };
    default:
      return { ...state };
  }
};
