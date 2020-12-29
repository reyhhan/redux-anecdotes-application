export const deleteNotification = () => {
    return {
        type: 'RESET'
    }
}

let timeId;
export const setNotification = (content, time) => {
    return async dispatch => {
        dispatch({
            type: 'SET',
            data: {
                content,
            }
        })
        clearTimeout(timeId)
        timeId = setTimeout(() => {
            dispatch(deleteNotification())
        }, time)
    }
}

const notificationReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET':
            const cons = action.data.content
            state = cons
            return state;

        case 'RESET':
            return state = ''

        default:
            return state
    }
}

export default notificationReducer