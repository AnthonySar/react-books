import { ADD_BOOKS, DELETE_ALL_BOOKS, DELETE_BOOKS } from "../type";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  books: [],
};

const helperAddData = (action) => {
  return {
    id: uuidv4(),
    title: action.payload.title,
    author: action.payload.author,
  };
};

const helperDeleteData = (state, id) => {
  const books = state.filter((book) => book.id !== id);
  return books;
};

// Reducer
const addBooksReducer = (state = initialState.books, action) => {
  // On vérifie si on à déjà la data en localStorage ou non
  if (localStorage.getItem("booksData")) {
    state = JSON.parse(localStorage.getItem("booksData"));
  }

  switch (action.type) {
    case ADD_BOOKS:
      // Spread operator pour récupéré ce qui nous intéresse
      // On passe l'action au niveau de helperAddData pour récupéré les datas
      state = [...state, helperAddData(action)];

      // On Enregistre une copie de la data en localStorage
      localStorage.setItem("booksData", JSON.stringify(state));

      return state;

    case DELETE_BOOKS:
      // On se base du l'ID du livre : payload: uuid()
      state = helperDeleteData(state, action.payload);
      localStorage.setItem("booksData", JSON.stringify(state));

      return state;

    case DELETE_ALL_BOOKS:
      state = [];
      localStorage.setItem("booksData", JSON.stringify(state));

      return state;

    default:
      return state;
  }
};

export default addBooksReducer;
