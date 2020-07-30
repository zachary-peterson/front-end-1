import { FETCH_DATA_START, FETCH_DATA_SUCCESS } from '../action/action'
import { FETCH_POSTDATA_START, FETCH_POSTDATA_SUCCESS } from '../action/fetchPosts'

// This is the intial file for our reducer functions
// export function reducer(){
//     return null
// }

const initialState = {
    loading: false,
    user: [],
    posts:[],
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
            case FETCH_POSTDATA_START:
                return {
                    ...state,
                    loading: true
                };
            case FETCH_POSTDATA_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    posts : action.payload,
                    error: ""
                }
        
        default: 
        return state;
    }
}