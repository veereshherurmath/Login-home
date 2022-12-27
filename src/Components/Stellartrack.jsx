import React from 'react'
import Navbar from './Navbar'

function Stellartrack() {
  return (
    <div>
      <Navbar />
      <div className='col-md-12 row'>
        <div className='col-md-6 px-5 d-flex flex-column align-items-start'>
          <heading className='float-start '>
            <img alt='img' />
            <span className='text-secondary'>Payroll</span>
          </heading>
          <div>
            <article className='mt-3 text-start'>
              <h3 style={{ color: '#043379' }}>
                "Keep Your Payroll Process Simple & Secure with Our Software!"
              </h3>
              <p style={{ fontSize: '12px' }}>
                Our payroll software is designed to make employee payroll and
                secure .Our intutive interface allows you to quickly and
                efficiently process, track employee hours, and manage tax
                information.We also offer a variety of reporting options and
                automated features to elp you stay and compliant. With our
                payroll software. you can assured that ypur employees are being
                paid accurately and on time.
              </p>
            </article>
            <div className='d-flex '>
              <button className='btn btn-primary' style={{ fontSize: '12px' }}>
                GET SATRTED {'->'}
              </button>
              <div className='d-flex' style={{ fontSize: '12px' }}>
                <img alt='business' />{' '}
                <span className='text-start'>
                  <p className='' style={{ marginBottom: '0px' }}>
                    Try our payroll free for 10 employees
                  </p>
                  <p className='text-muted' style={{ marginBottom: '0px' }}>
                    Valid till DD/MM/YYYY
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-6'>
          <img src='../promethean.png' style={{ height: '240px' }} alt='img' />
        </div>
        <div className='row mt-1'>
          <div className='card border-0 mt-4' style={{ width: '16rem' }}>
            <img className='card-img w-50 ms-5' alt='image' />
            <div className='card-body text-start'>
              <h6 className='card-title'>Easy to use</h6>
              <p className='card-text' style={{ fontSize: '12px' }}>
                Simple and user friendly design for easy adaption.
              </p>
            </div>
          </div>
          <div className='card border-0 mt-4' style={{ width: '18rem' }}>
            <img className='card-img w-50 ms-5' alt='image' />
            <div className='card-body text-start'>
              <h6 className='card-title'>Additional Integratd benefits</h6>
              <p className='card-text' style={{ fontSize: '12px' }}>
                Integrated with our software's for HR,Statutory Employee Self
                service portals & much more.
              </p>
            </div>
          </div>
          <div className='card border-0 mt-4' style={{ width: '18rem' }}>
            <img className='card-img w-50 ms-5' alt='image' />
            <div className='card-body text-start'>
              <h6 className='card-title'>Automated Complainces</h6>
              <p className='card-text' style={{ fontSize: '12px' }}>
                Set Compliances like PF,TDS,PT & ESIC on auto pilot.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h4 style={{ color: '#043379' }}>
            500+ High-Growth Companies Trust Stars Payroll Software{' '}
          </h4>
          <p className='mb-0'>join us an find out why</p>
        </div>
      </div>
    </div>
  )
}

export default Stellartrack
