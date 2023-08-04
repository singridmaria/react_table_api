import { useEffect, useState } from 'react'
import { Table } from './components/Table'


function App() {
  const colunas = ['id', 'name', 'email', 'username', 'website', 'address']
  const [data, setData] = useState([])


  const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setData(data)
      })
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className='container'>
      <Table
        colunas={colunas}
        data={data}
      />
    </div>
  )
}

export default App
