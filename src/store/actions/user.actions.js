import { SPEND_BALANCE, GET_USER, UPDATE_USER, LOGIN } from "../reducers/user.reducer"
import { UserService } from "../../services/UserService"

export function spendBalance(amount) {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: SPEND_BALANCE, amount })
        } catch (error) {
            console.log('error:', error)
        }
    }
}

export function getLoggedInUser() {
    return (dispatch, getState) => {
        const loggedInUser = UserService.getLoggedinUser()
        dispatch({ type: GET_USER, loggedInUser })
    }
}

export function updateUser(user){
    return async(dispatch, getState) =>{
        try {
            const updatedUser = await UserService.update(user)
            dispatch({ type: UPDATE_USER, updatedUser })
        } catch (error) {
            console.log('error:', error)
        }
    }
}

export function login(userName){
    return async (dispatch, getState) => {
        try {
            const loggedInUser = await UserService.login(userName)
            dispatch({ type: LOGIN, loggedInUser })
        } catch (error) {
            console.log('error:', error)
        }
    }
}

export function logOut(userName){
    return async (dispatch, getState) => {
        try {
            const loggedInUser = UserService.logout()
            dispatch({ type: LOGIN, loggedInUser })
        } catch (error) {
            console.log('error:', error)
        }
    }
}