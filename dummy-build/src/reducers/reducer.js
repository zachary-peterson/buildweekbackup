import { FETCH_DATA_START, FETCH_DATA_SUCCESS } from '../action/action'

// This is the intial file for our reducer functions
// export function reducer(){
//     return null
// }

const initialState = {
    loading: false,
    user: [],
    error: "",

}
export const reducer = ( state = initialState, action ) => {
    switch(action.type){
        case FETCH_DATA_START:
            return {
                ...state,
                loading: true
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                user : action.payload,
                error: ""
            }
        
        default: 
        return state;
    }
}