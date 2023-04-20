import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { addBook, deleteAllBook, deleteBook } from '../redux/actions/actionBooks';
import { MdOutlineDeleteForever } from 'react-icons/md'
import FlipMove from 'react-flip-move';

const AddBooks = () => {
  const initialState = {
    title: '',
    author: ''
  };
  
  const [newData, setNewData] = useState(initialState);

  // On gére notre store avec les Hooks Redux
  const libraryData = useSelector((state) => state.library);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // on invoque l'action dans actionAddBooks.js
    dispatch(addBook(newData));

    // On réinitialise la data à 0
    setNewData(initialState);
  }

  const handleDelete = (id) => {
    // L'action est dans le reducerBooks : case DELETE_BOOKS
    // On retire la data en fonction de l'id if(!==)
    dispatch(deleteBook(id))
  }

  const handleAllDelete = () => {
    // On vide l'array tout simplement depuis notre reducerBooks
    dispatch(deleteAllBook())
  }

  // On procéde au traitement de la data à afficher avec la méthode map()
  const displayData = libraryData.length > 0 ? libraryData.map((data) => {
    return (
      <FlipMove>
        <li key={data.id} className='list-group-item list-group-item-light d-flex justify-content-between align-items-center'>
          <span className='w-50'>{ data.title }</span>
          <span className='w-50'>{ data.author }</span>
          <span 
            className='btn btn-danger'
            onClick={() => handleDelete(data.id)}><MdOutlineDeleteForever /></span>
        </li>
      </FlipMove>
    )
  }) : <p className='text-center'>Il n'y a aucun livre dans la collection</p>;

  const displayBtn = libraryData.length > 0 &&
    <div className='d-flex justify-content-center'>
      <button 
        className='btn btn-danger mt-4 mb-3'
        onClick={() => handleAllDelete()}>Effacer la collection</button>
    </div>;

  return (
    <main role='main'>
      <div className='d-flex rounded'>
        <div className='container text-center'>
          <h2 className='display-4'>Collections</h2>
          <p>Ajouter un livre à votre collections</p>

          <form className='justify-content-center' onSubmit={handleSubmit}>
            <div className='row'>
              <div className='col'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Titre du livre'
                  required 
                  value={newData.title}
                  onChange={(e) => {setNewData({...newData, title: e.target.value})}}
                />
              </div>

              <div className='col'>
                <input
                  type='text'
                  className='form-control ml-3'
                  placeholder='Auteur du livre'
                  required 
                  value={newData.author}
                  onChange={(e) => {setNewData({...newData, author: e.target.value})}}
                />
              </div>

              <div className='col'>
                <button className='btn btn-outline-secondary ml-3'>Ajouter un livre</button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className='container mt-4' style={{minHeight: '200px'}}>

        <div className='row'>
          <div className='col-md-12'>
            <ul className='list-group'>
              { displayData }
            </ul>
          </div>
            { displayBtn }
        </div>
      </div>
    </main>
  )
}

export default AddBooks;