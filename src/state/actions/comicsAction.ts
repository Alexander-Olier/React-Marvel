export const getComicsData = (comicsData: any) => {
    return {
        type: "getComics",
        payload: comicsData
    }
}
export const getComicData = (comicData: any) => {
    return {
        type: "getComic",
        payload: comicData
    }
}