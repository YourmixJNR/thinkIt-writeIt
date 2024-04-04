import React, { useEffect } from 'react'
import { useApiClient } from '../../hooks/useApiClient'

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
        <div>
            <p onClick={handleClick}>
                Hi
            </p>
        </div>
    )
}

export default Index
