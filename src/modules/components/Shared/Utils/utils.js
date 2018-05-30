export let User = {
    userStatus: () => {
        return window.localStorage.getItem('isLogin')
    },
    Login: () => {
        window.localStorage.setItem('isLogin', true)
    },
    Logout: () => {
        window.localStorage.removeItem('isLogin')
    }
}