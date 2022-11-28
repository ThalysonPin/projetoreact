import { useState } from 'react'
import './App.css'
import FilterButton from './components/FilterButton';
import Form from './components/Form';
import Todo from './components/Todo'


function App(props) {
  
  function addTask(name){
    alert(name)
  }

  const taskList = props.tasks.map((task) => (
  <Todo 
  name={task.name} 
  id={task.id} 
  completed={task.completed}
  key={task.id}
  />));



  return (
<div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      
      <Form addTask={addTask} />


      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>

      {/* Contador de tarefas visiveis */}
      <h2 id="list-heading">
        3 tasks remaining
      </h2>

      {/* Lista de tarefas dentro de uma Undernad List com botões para editar e deletar, e uma checkbox  */}
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >

        {taskList}

      </ul>
    </div>
  )
}

export default App
