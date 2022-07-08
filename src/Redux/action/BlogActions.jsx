import{ActionTypes} from "../Constant/action-Types";
export const setBlog=(blogs)=>{
    return{
        type:ActionTypes.SET_BLOGS,
        payload:blogs,
    }
}
export const SelectedBlog=(blogs)=>{
    return{
        type:ActionTypes.SELECTED_BLOGS,
        payload:blogs,
    }
}