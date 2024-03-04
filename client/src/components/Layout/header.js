import React from 'react'
import { Link } from 'react-router-dom'

const header = () => {
  return (
    <>
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className="navbar-brand text-light" to="/" >Expense Manage</Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active text-light" aria-current="page" to="/user" >User</Link>
                </li>
            </ul>
            </div>
        </div>
    </nav>

    </>
  )
}

export default header