export const actionType = {
    SET_USER : 'SET_USER',
    LOGOUT : 'LOGOUT'
}

const reducer = (state, action) => {
    console.log(action)

    switch(action.type){
        case actionType.SET_USER:
            return{
                ...state,
                user: action.user,
            };
        default:
            return state;

        case actionType.LOGOUT:
            return{
                ...state,
                user : null
            }
    }
}

export default reducer