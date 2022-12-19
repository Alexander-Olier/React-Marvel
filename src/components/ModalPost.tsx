import axios from "axios";
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getComicData } from "../state/actions/comicsAction";
import Loader from "./Loader/Loader";

export default function ModalPost(id: any) {
    const comicData = useSelector((state: any) => state?.comic?.comicData)
    const dispatch = useDispatch();

    const fetchComic = async () => {
        await axios.get(`http://gateway.marvel.com/v1/public/comics/${id.id}?ts=1&apikey=46131d0c93cdc66ce18f01b1418a2da2&hash=d0c0422aa25bc088f1d92079f999f676`)
            .then((res) => {
                dispatch(getComicData(res.data.data.results))
            })
    }
    useEffect(() => {
        fetchComic();
        console.log(comicData)
    }, [])
    return (
        <div className="w-full">
            <div className="grid grid-cols-1 py-2 justify-items-center 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2">

                {
                    (!comicData && comicData == undefined) ?
                        <>
                            <Loader />
                        </>
                        :
                        comicData.map((comic: any) => {
                            return (
                                <>
                                    <div className="self-center">
                                        <h1 className="text-2xl font-extrabold text-white 2xl:text-4xl">{comic.title}</h1>
                                    </div>
                                    <div className="w-44 h-44  xl:w-72 h-72 lg:w-72 h-72 md:w-72 h-60 2xl:w-72 h-72">
                                        <div style={{ backgroundImage: `url(${comic.thumbnail.path}.${comic.thumbnail.extension})`, width: "100%", height: "100%", backgroundSize: "cover" }}>

                                        </div>
                                    </div>
                                </>
                            )
                        })
                }
            </div>
        </div>
    )
}