import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Home() {
  const [user, setUser] = useState([])
  const navigate = useNavigate()
  const fetchData = () => {
    return axios
      .get('https://restcountries.com/v2/all?fields=name,region,flag')
      .then(response => setUser(response.data))
  }
  useEffect(() => {
    fetchData()
  }, [])
  const handlesignout = () => {
    navigate('/')
  }
  return (
    <div>
      <nav className='navbar navbar-light bg-light'>
        <div className='container-fluid'>
          <span className='navbar-text text-dark'>
            Listing all the countries
          </span>
          <button className='btn btn-light' onClick={handlesignout}>
            Signout
          </button>
        </div>
      </nav>
      <table className='table table-striped table-hover'>
        <thead>
          <tr>
            <th scope='col'>Region</th>
            <th scope='col'>Country</th>
            <th scope='col'>Flag</th>
          </tr>
        </thead>
        <tbody>
          {user &&
            user.length > 0 &&
            user.map((country, index) => {
              return (
                <tr key={index}>
                  <td>{country.region}</td>
                  <td>{country.name}</td>
                  <td>
                    <img
                      src={country.flag}
                      alt='flag'
                      style={{ height: '18px' }}
                    />
                  </td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default Home
