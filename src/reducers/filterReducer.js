export const filter = (keyWord) => {
    return {
        type: 'ACTIVE',
        data: keyWord
    }
}

const filterReducer = (state = '', action) => {
    switch (action.type) {
        case 'ACTIVE':
            return action.data

        default:
            return state;
    }
}

export default filterReducer