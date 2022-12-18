export const getComicsData= (comicData: any)=>{
    return{
        type: "getComics", 
        payload:comicData
    }
}