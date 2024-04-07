import React, { useEffect } from 'react'
import { useApiClient } from '../../hooks/useApiClient'
import ProtectedRoute from '../../utils/ProtectedRoute'

const Index = () => {
    const apiClient = useApiClient()
    const handleClick = async () => {
        try {
            const { data } = await apiClient.get("/auth/current-user")
            console.log(data)
        } catch (err) {
            console.log("Error", err)
        }
    }
    // useEffect(() => {
    //     fetchUser()
    // }, [])
    return (
        <ProtectedRoute>
        <div>
            <p onClick={handleClick}>
                Hi
            </p>
        </div>
        </ProtectedRoute>
    )
}

export default Index
