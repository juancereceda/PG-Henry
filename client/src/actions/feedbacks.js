import axios from "axios";
export const GET_VISIBLES_FEEDBACKS = 'GET_VISIBLES_FEEDBACKS';

export function getVisiblesFeedbacks(){
    return async function(dispatch){
        const response = await axios.get('http://localhost:3001/feedbacks/visibles');
        dispatch({ type: GET_VISIBLES_FEEDBACKS, payload: response.data });
    }
}