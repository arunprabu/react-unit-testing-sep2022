import React, { useEffect, useState } from 'react'

const Todos = () => {

  // api url : https://jsonplaceholder.typicode.com/todos?_limit=4
  const todosApiUrl = 'https://jsonplaceholder.typicode.com/todos?_limit=4';
  const [todoList, setTodoList] = useState([]);

  // 1. what's the rest api url ?
  // 2. what's the http method? GET
  // 3. What's the Rest API client? Fetch 

  useEffect( () => {
    const fetchTodos = async() => {
      var res = await fetch(todosApiUrl);
      const resInJSON = await res.json();
      console.log(resInJSON);
      // updating the todoList array 
      setTodoList(resInJSON);
    }
    fetchTodos();
  }, []);

  return (
    <div>
      <h2>Todos</h2>

      {
        todoList.map( ( todo )=> {
          return(
            <div key={todo.id}  style={{borderBottom: 'solid 1px #ccc'}}>
              <p>#{todo.id}</p>
              <p>{todo.title}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Todos