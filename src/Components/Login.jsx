import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Login() {
  const navigate = useNavigate()
  const [values, setValues] = useState({
    email: '',
    pass: '',
  })
  const [errorMsg, setErrorMsg] = useState('')
  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg('Fill all fields')
      return
    }
    navigate('/Home')
  }

  return (
    <div>
      <section className=' gradient-custom'>
        <div className='container py-5'>
          <div className='row d-flex justify-content-center align-items-center '>
            <div className='col-12 col-md-8 col-lg-6 col-xl-5'>
              <div
                className='card bg-dark text-white'
                style={{ borderRadius: '1rem' }}>
                <div className='card-body p-5 text-center'>
                  <div className=' pb-5'>
                    <h3 className='fw-bold mb-1 text-uppercase'>Login</h3>
                    <p className='text-white-50 mb-2'>
                      Please enter your login and password!
                    </p>

                    <div className='form-outline form-white mb-2'>
                      <input
                        type='email'
                        onChange={e =>
                          setValues({ ...values, email: e.target.value })
                        }
                        className='form-control form-control-lg'
                      />
                      <label className='form-label'>Email</label>
                    </div>

                    <div className='form-outline form-white mb-2'>
                      <input
                        type='password'
                        onChange={e =>
                          setValues({ ...values, pass: e.target.value })
                        }
                        className='form-control form-control-lg'
                      />
                      <label className='form-label'>Password</label>
                    </div>

                    {/* <p className='small  pb-lg-2'>
                      <a className='text-white-50'>Forgot password?</a>
                    </p> */}
                    <div className='row'>
                      <b className='text-danger'>{errorMsg}</b>
                      <button
                        className='btn btn-outline-light btn-lg px-5'
                        onClick={handleSubmission}>
                        Login
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login
