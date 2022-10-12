import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from "../context/Stateprovider"

function Dashboard() {
  const [error, setError] = useState("")
  const { logout, currentuser } = useAuth();
  const history = useNavigate()

  async function handlelogout() {
    setError("")
    try {
      await logout()
      history('/login');
    } catch {
      setError("Failed to log out")
    }
  }
  return (
    <div className='signup'>
      <div className="card" style={{ maxwidth: "550px" }}>
        <div className="card-body">
          <h2 className="card-title text-center mb-2">Profile</h2>
          {error && (<div className="alert alert-danger" role="alert">
            {error}
          </div>)}
          <div className="stem"><strong>Email:</strong> {currentuser.email}</div>
          <div className="updatebtn text-center">
            <Link to="/updateprofile" className="btn btn-primary mt-3 ">
              Update Profile
            </Link>
          </div>
        </div>
      </div>
      <div className="w-100 text-center mt-2">
        <button type="submit" value="Submit" className="btn btn-primary" onClick={handlelogout}>Logout</button>
      </div>
    </div>
  )
}

export default Dashboard
