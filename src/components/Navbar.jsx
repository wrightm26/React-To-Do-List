import React from 'react'

export default function Navbar({ username}) {
    // console.log(props);
    // console.log(typeof props);
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid text-bg-success p-5 justify-content-center">
                <a href="/" className="fs-1 text-light navbar-brand fw-lighter">Welcome {username}!<p className="fw-lighter text-center">Your To Do List:</p></a>
            </div>
        </nav>
    )
}
