import React, { useRef, useState } from 'react'
import './Signup.css'
import { useAuth } from "../context/Stateprovider"
import {Link, useNavigate} from 'react-router-dom'

function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {signup} = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useNavigate()

    async function handlesubmit(e) {
        e.preventDefault();
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
        }
        try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history('/');
        } catch {
            setError("Failed to create an account")
        }

        setLoading(false)
    }
    return (
        <div className="signup">
            <div className="card" style={{ maxwidth: "550px" }}>
                <div className="card-body">
                    <h2 className="card-title text-center mb-2">Sign Up</h2>
                    {error && (<div className="alert alert-danger" role="alert">
                        {error}
                    </div>)}
                    <form action="" onSubmit={handlesubmit}>
                        <div className="mb-2 row">
                            <label htmlFor="staticEmail" className="col-form-label">Email</label>
                            <div className="">
                                <input type="text" className="form-control" id="staticEmail" ref={emailRef} required/>
                            </div>
                        </div>
                        <div className="mb-2 row">
                            <label htmlFor="inputPassword" className="col-form-label">Password</label>
                            <div className="col">
                                <input type="password" className="form-control" id="inputPassword" ref={passwordRef} required/>
                            </div>
                        </div>
                        <div className="mb-2 row">
                            <label htmlFor="inputPassword" className=" col-form-label">Confirm Password</label>
                            <div className="col-sm">
                                <input type="password" className="form-control" id="coninputPassword" ref={passwordConfirmRef} required/>
                            </div>
                        </div>
                        <div className="w-100 text-center">
                            <button type="submit" value="Submit" disabled={loading} className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="w-100 text-center mt-2">
                Already have an account? <Link to='/login'>Login</Link>
            </div>
        </div>
    )
}

export default Signup
