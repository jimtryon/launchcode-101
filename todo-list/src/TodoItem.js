import React from 'react';

function TodoItem(props) {
    return <li><input type="checkbox" checked={props.isCompleted} />{props.children}</li>
  }

export default TodoItem;