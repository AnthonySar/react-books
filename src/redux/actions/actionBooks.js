import { ADD_BOOKS, DELETE_ALL_BOOKS, DELETE_BOOKS } from "../type";

/**
 * 
 * @param {payload} data Object
 */
export const addBook = (data) => {
  return {
    type: ADD_BOOKS,
    payload: data 
  }
};

export const deleteBook = (id) => {
  return {
    type: DELETE_BOOKS,
    payload: id
  }
} ;

export const deleteAllBook = () => {
  return {
    type: DELETE_ALL_BOOKS
  }
}