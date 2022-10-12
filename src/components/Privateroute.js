import React from 'react'
import {Navigate} from 'react-router-dom'
import {useAuth} from '../context/Stateprovider.js'

function Privateroute({children}) {
    const {currentuser} = useAuth()
    if(!currentuser){
        return <Navigate to='/login'/>
    }
    return children
}

export default Privateroute
