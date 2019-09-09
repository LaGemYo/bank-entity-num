import React from 'react'

export default function Pagination({ page, onPrevPage, onNextPage }) {
  
  return (
    <div className="page-buttons">
      {page > 1 && <button
        className="prev-btn"
        onClick={onPrevPage}>Anterior</button>}
      <button
        className="next-btn"
        onClick={onNextPage}>Siguiente</button>
    </div>
  )
}