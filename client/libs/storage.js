export const SESSION_KEY = "thinkIt-writeIt-session"
export const USER_KEY = "user"

export const setAuthToken = (token) => {
    window.localStorage.setItem(SESSION_KEY, token)
}

export const getAuthToken = () => {
    return window.localStorage.getItem(SESSION_KEY) || null
}

export const removeAuthToken = () => {
    window.localStorage.removeItem(SESSION_KEY)
}

export const setUser = (user) => {
    window.localStorage.setItem(USER_KEY, user)
}

export const getUser = () => {
    return window.localStorage.getItem(USER_KEY) || null
}

export const removeUser = () => {
    window.localStorage.removeItem(USER_KEY)
}

export const StorageServices = {
    setAuthToken,
    getAuthToken,
    removeAuthToken,
    setUser,
    getUser,
    removeUser,
}