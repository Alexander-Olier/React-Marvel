import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComicsData } from "../state/actions/comicsAction";
import Loader from "./Loader/Loader";

export default function Cards() {
    const comicsData = useSelector((state: any) => state?.comics?.comicsData)
    const dispatch = useDispatch();

    const fetchComics = async () => {
        await axios.get("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=46131d0c93cdc66ce18f01b1418a2da2&hash=d0c0422aa25bc088f1d92079f999f676")
            .then((res) => {
                dispatch(getComicsData(res.data.data.results))
                console.log(res.data.data.results)
            })
    }
    useEffect(() => {
        fetchComics()
    }, [])
    return (
        <div className="grid grid-cols-4 gap-4 py-2">

            {
                (!comicsData && comicsData == undefined) ?
                    <>
                        <Loader />
                    </>
                    :
                    comicsData.map((comic: any) => {
                        return (
                            <div key={comic.id}>
                                <div className="w-72 h-72">
                                    <div style={{backgroundImage:`url(${comic.thumbnail.path}.${comic.thumbnail.extension})`,width:"100%", height:"100%", backgroundSize:"cover"}}>

                                    </div>
                                </div>
                                <div className="w-72 h-16 bg-[#151515] text-white">
                                    <h2 className="p-2 font-bold text-xl">{comic.name}</h2>
                                </div>
                            </div>
                        )
                    })
            }
        </div>
    )
}