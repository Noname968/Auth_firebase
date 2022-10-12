import React, { useRef, useState } from 'react'
import './Signup.css'
import { useAuth } from "../context/Stateprovider"
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useNavigate()

    async function handlesubmit(e) {
        e.preventDefault();
        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history('/');
        } catch {
            setError("Failed to login")
        }

        setLoading(false)
    }
    return (
        <div className="signup">
            <div className="card" style={{ maxwidth: "550px" }}>
                <div className="card-body">
                    <h2 className="card-title text-center mb-2">Login</h2>
                    {error && (<div className="alert alert-danger" role="alert">
                        {error}
                    </div>)}
                    <form action="" onSubmit={handlesubmit}>
                        <div className="mb-2 row">
                            <label htmlFor="staticEmail" className="col-form-label">Email</label>
                            <div className="">
                                <input type="text" className="form-control" id="staticEmail" ref={emailRef} required autoComplete='off'/>
                            </div>
                        </div>
                        <div className="mb-2 row">
                            <label htmlFor="inputPassword" className="col-form-label">Password</label>
                            <div className="col">
                                <input type="password" className="form-control" id="inputPassword" ref={passwordRef} required />
                            </div>
                        </div>
                        <div className="w-100 text-center">
                            <button type="submit" value="Submit" disabled={loading} className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="w-100 text-center mt-2">
                        <Link to='/forgotpass'>Forgot Password</Link>
                    </div>
                </div>
            </div>
            <div className="w-100 text-center mt-2">
                Need an Account? <Link to='/signup'>Sign up</Link>
            </div>
        </div>
    )
}

export default Login
