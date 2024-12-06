
import { useEffect, useState, useRef } from 'react'
import './Style.css'
import Trash from '../../assets/trash.svg'
import api from '../../service/api'

function Home() {
  const [users, setUsers] = useState ([])

  const inputName = useRef()
  const inputSobrenome = useRef()
  const inputEmail = useRef()

  async function getUsers() {
    const usersFromApi = await api.get('/users')

    setUsers(usersFromApi.data.data)
  }

  async function createUsers() {
    await api.post('/users', {
      first_name: inputName.current.value,
      last_name: inputSobrenome.current.value,
      email: inputEmail.current.value

    })

    getUsers()
  }

  async function deleteUsers() {
    await api.delete(`/users/${id}`)

  }



  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <div className='container'>
        <form>
          <h1>Cadastro de Usuários</h1>
          <input placeholder="Digite seu nome..." type="text" name='nome' ref={inputName}/>
          <input placeholder="Digite sua idade..." type="number" name='idade' ref={inputSobrenome}/>
          <input placeholder="Digite seu e-mail..." type="text" name='Email' ref={inputEmail}/>
          <button type='button' onClick={createUsers}>Cadastrar</button>
        </form>

        {users.map(user => (
          <div key={user.id} className="card">
            <div>
              <p>Nome: <span>{user.first_name}</span></p>
              <p>Sobrenome: <span>{user.last_name}</span></p>
              <p>E-mail: <span>{user.email}</span></p>
            </div>

            <button onClick={() => deleteUsers(user.id)}>
              <img src={Trash} alt="" />
            </button>
          </div>

        ))}

      </div>
    </>
  )
}

export default Home
