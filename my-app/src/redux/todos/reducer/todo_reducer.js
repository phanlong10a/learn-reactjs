import * as types from '../actions/type'


const initialState = {
    idTodo: 1,
    nameWork: '',
    listWork: []
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_WORK:
        return{
            ...state,
            ...{
                nameWork: action.payload.name,
                idTodo: action.payload.id +1,
                listWork: [...state.listWork, {
                    id: state.idTodo,
                    name: action.payload.name,
                    done:false
                }]
            }        
        }
        case types.REMOVE_WORK:
            const id = action.payload.id
            const newListWork = state.listWork.filter(item => item.id !== id)
            return {
                ...state,
                ...{
                    listWork: newListWork,
                }     
            }

        case types.DONE_WORK:
            const idDone = action.payload.id
            const newWork = state.listWork.map(item=>{
                return item.id === idDone ? {...item, done: !item.done} : item;
            })
            return {
                ...state,
                ...{
                    listWork: newWork,
                }     
            }
        default: return state;
    }
}