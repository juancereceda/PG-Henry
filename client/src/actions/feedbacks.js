import axios from "axios";
const GET_VISIBLES_FEEDBACKS = 'GET_VISIBLES_FEEDBACKS';

export async function getVisiblesFeedbacks(){
    const response = await axios.get('http://localhost:3001/feedbacks/visibles');
    return { type: GET_VISIBLES_FEEDBACKS, payload: response.data };
}