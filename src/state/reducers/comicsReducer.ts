const initialState = {
    comics:[],
    loading: true
}

const comicsReducer = (state = initialState, action: any) =>{

    switch(action.type){
        case "getComics":
            return{
                ... state, 
                comicsData: action.payload,
                loading:false
            }
            default:
                return state;
    }

}
export default comicsReducer;