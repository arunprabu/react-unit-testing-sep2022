import React, { useEffect, useState } from 'react'
import { fetchAPI } from '../../Utils/fetchAPI'

const Users = () => {

  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  // users API URL: https://jsonplaceholder.typicode.com/users?_limit=4
  useEffect( () => {
    fetchAPI('https://jsonplaceholder.typicode.com/users?_limit=4')  
      .then( (res) => {
        setUsers(res);
      })
      .catch( (err) => {
        setError(err);
      })
  }, [])
  
  // lists and keys 
  let userList = null;
  if(users && users.length > 0){
    userList = users.map( (user) => {
      return(
        <div key={user.id} style={{borderBottom: 'solid 1px #00f'}}>
          <p>{user.id}</p>
          <h3>Name: {user.name}</h3>
        </div>
      )
    })
  }

  return (
    <div>
      <h2>Users | Fetch API Demo with mocking</h2>

      {
        error? 
        <div>Sorry! Some error occurd! pls try again</div>
        :
        userList
      }


    </div>
  )
}

export default Users