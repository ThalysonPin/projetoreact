import React from 'react'

export default function FilterButton() {
  return (
    <div>
              {/* Filtros: botões para filtrar tarefas */}
      
        <div className="filters btn-group stack-exception">

            <button 
            type="button"
            className="btn toggle-btn" 
            aria-pressed="true">
                <span className="visually-hidden">Show </span>
                <span>all</span>
                <span className="visually-hidden"> tasks</span>
            </button>

        </div>

    </div>
  )
}
