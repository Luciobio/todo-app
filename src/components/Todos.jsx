import React from 'react';

export default function Todos(props){

  const {todos, deleteTodo} = props;

  // const todoList = todos.length ? (
  //   todos.map(item =>  {
  //     return (
  //       <div key={item.id}>
  //         <span onClick= { ()=> {deleteTodo(item.id)} }>{item.cont}</span>
  //       </div>
  //     )
  //   })
  // ) : (
  //   <p>No quedan más tareas!</p>
  // );

  const todoList2 = () => {
    if(todos.length) {
      return todos.map(item =>  {
        return (
          <div key={item.id}>
            <span onClick= { ()=> {deleteTodo(item.id)} }>{item.cont}</span>
          </div>
        )
    })

  } else {
      return <p>No quedan más tareas!</p>
    }
  };

  return(
    <div>
      {todoList2()}
      {todos.length === 1 && <h1>El ultimo</h1> }
    </div>
  )
}
