import React from 'react';

function TodoItem(props) {
    return <li>
        <input
         type="checkbox"
         checked={props.isCompleted}
         onChange={(event) => props.onToggleTodo(props.index, event.target.checked)} />
         {props.children}
         </li>
  }

export default TodoItem;