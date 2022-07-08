import { ActionTypes } from "../Constant/action-Types";
const initialState = {
    blogs: [],
};

export const BlogReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_BLOGS:
            return { ...state, blogs: payload };
        default:
            return state;
    }
}