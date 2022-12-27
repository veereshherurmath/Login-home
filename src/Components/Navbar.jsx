import React from 'react'

function Navbar() {
  return (
    <div>
      <nav class='navbar'>
        <div class='container-fluid'>
          <div className='text-muted'>
            <a class='navbar-brand'>
              <img alt='STARS Payroll' />
            </a>

            <select className='border-0 bg-white text-muted'>
              <option>Products</option>
            </select>

            <a className='mx-3 text-decoration-none text-muted'>Pricing</a>
            <a>Support</a>
          </div>
          <div class='d-flex'>
            <button
              class='btn btn-outline-primary mx-3 text-muted'
              type='submit'>
              Sign In
            </button>
            <button class='btn btn-outline-primary text-muted' type='submit'>
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
