import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { decrement } from '../features/counter/counterSlice'

const Nav = () => {
    const dispatch = useDispatch()
    const [searchKey, setSearchKey] = useState('')
    return (
        <nav className="navbar navbar-dark bg-dark position-sticky top-0">
            <div className="container-fluid">
                <a className="navbar-brand">Navbar</a>
                <form className="d-flex">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search movie"
                        aria-label="Search"
                        onChange={(e) => setSearchKey(e.target.value)}
                    />
                    <button type="button" className="btn btn-success"
                        onClick={() => dispatch(decrement(searchKey))}
                    >
                        Search
                    </button>
                </form>
            </div>
        </nav >
    )
}

export default Nav