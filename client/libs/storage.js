export const USER_KEY = "user"
export const CSRF_KEY = "csrfToken"

export const setUser = (user) => {
    window.localStorage.setItem(USER_KEY, user)
}

export const getUser = () => {
    return window.localStorage.getItem(USER_KEY) || null
}

export const removeUser = () => {
    window.localStorage.removeItem(USER_KEY)
}

export const setCsrfToken = (csrfToken) => {
    window.localStorage.setItem(CSRF_KEY, csrfToken)
}

export const getCsrfToken = () => {
    return window.localStorage.getItem(CSRF_KEY)
}

export const removeCsrfToken = () => {
    window.localStorage.removeItem(CSRF_KEY)
}

export const StorageServices = {
    setUser,
    getUser,
    removeUser,
    setCsrfToken,
    getCsrfToken,
    removeCsrfToken
}