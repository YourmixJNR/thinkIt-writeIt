export const USER_KEY = "user"

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
    setUser,
    getUser,
    removeUser
}