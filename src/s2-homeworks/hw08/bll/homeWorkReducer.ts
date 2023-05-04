import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.payload) {
        case 'up': { // by name
            // sort() создаёт новый массив? или нужно в ручную?...
            let newState = [...state]
            newState.sort((a, b) => a.name > b.name
                ? 1
                : -1
            )
            return newState
        }
        case 'down': { // by name
            // sort() создаёт новый массив? или нужно в ручную?...
            let newState = [...state]
            newState.sort((a, b) => a.name > b.name
                ? -1
                : 1
            )
            return newState
        }
        case 18: {
            // filter() создаёт новый массив? или нужно в ручную?...
            let newState = state.filter(a => a.age >= 18)
            newState.sort((a, b) => a.name > b.name
                ? 1
                : -1
            )
            return newState
        }
        default:
            return state
    }
}


// export const homeWorkReducer = (state: UserType[], action: ActionType): any => { // need to fix any
//     switch (action.type) {
//         case 'sort': { // by name
//             // sort() создаёт новый массив? или нужно в ручную?...
//             return state // need to fix
//         }
//         case 'check': {
//             // filter() создаёт новый массив? или нужно в ручную?...
//             return state.filter(a => a.age >= 18)
//             // need to fix +
//         }
//         default:
//             return state
//     }
// }