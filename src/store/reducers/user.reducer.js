export const SPEND_BALANCE = 'SPEND_BALANCE'
export const GET_USER = 'GET_USER'
export const UPDATE_USER = 'UPDATE_USER'

const INITIAL_STATE = {
    loggedInUser: null
}

export function userReducer(state = INITIAL_STATE, action = {}) {

    switch (action.type) {
        case 'SPEND_BALANCE':
            const { loggedInUser } = state
            return {
                ...state,
                loggedInUser: { ...loggedInUser, balance: loggedInUser.balance - action.amount }
            }
        case 'GET_USER':
            return{
                ...state,
                loggedInUser: action.loggedInUser
            }
        case 'UPDATE_USER':
            return{
                ...state,
                loggedInUser: action.updatedUser
            }

        default:
            return state;
    }
}