import React, { useRef, useState } from 'react'
import './Signup.css'
import { useAuth } from "../context/Stateprovider"
import { Link } from 'react-router-dom'

function Forgotpass() {
    const emailRef = useRef()
    const { resetpassword } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [message, setmessage] = useState("")


    async function handlesubmit(e) {
        e.preventDefault();
        try {
            setError("")
            setLoading(true)
            await resetpassword(emailRef.current.value)
            setmessage("Check your mail for further instructions")
        } catch {
            setError("Failed to reset (Enter correct email)")
        }

        setLoading(false)
    }
    return (
        <div className="signup">
            <div className="card" style={{ maxwidth: "550px" }}>
                <div className="card-body">
                    <h2 className="card-title text-center mb-2">Reset Password</h2>
                    {error && (<div className="alert alert-danger" role="alert">
                        {error}
                    </div>)}
                    {message && (<div className="alert alert-success" role="alert">
                        {message}
                    </div>)}
                    <form action="" onSubmit={handlesubmit}>
                        <div className="mb-2 row">
                            <label htmlFor="staticEmail" className="col-form-label">Email</label>
                            <div className="">
                                <input type="text" className="form-control" id="staticEmail" ref={emailRef} required />
                            </div>
                        </div>
                        <div className="w-100 text-center">
                            <button type="submit" value="Submit" disabled={loading} className="btn btn-primary">Reset</button>
                        </div>
                    </form>
                    <div className="w-100 text-center mt-2">
                        <Link to='/login'>Login</Link>
                    </div>
                </div>
            </div>
            <div className="w-100 text-center mt-2">
                Need an Account? <Link to='/signup'>Sign up</Link>
            </div>
        </div>
    )
}

export default Forgotpass
