import React from 'react';
import {  } from 'react-bootstrap'
import history from '../data/history.json'

const LatestRelease = () => {

  return <div className="d-flex flex-wrap">{
    history.map(book => {
        return <>
        <img className="book-cover" src={book.img} alt="books" />
        <p className="lead">{book.title}</p>
        </>
    })
}</div >
}

export default LatestRelease