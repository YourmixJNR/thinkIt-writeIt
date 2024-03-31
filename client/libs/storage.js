export const USER_KEY = "user"
export const AUTH_KEY = "auth"

export const setUser = (user) => {
    window.localStorage.setItem(USER_KEY, user)
}

export const getUser = () => {
    return window.localStorage.getItem(USER_KEY) || null
}

export const removeUser = () => {
    window.localStorage.removeItem(USER_KEY)
}

export const setAuth = (authState) => {
    window.localStorage.setItem(AUTH_KEY, authState)
}

export const getAuth = () => {
    return window.localStorage.getItem(AUTH_KEY)
}

export const removeAuth = () => {
    window.localStorage.removeItem(AUTH_KEY)
}

export const StorageServices = {
    setUser,
    getUser,
    removeUser,
    setAuth,
    getAuth,
    removeAuth
}