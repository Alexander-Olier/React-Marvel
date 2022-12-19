import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComicsData } from "../state/actions/comicsAction";
import Loader from "./Loader/Loader";
import ModalPost from "./ModalPost";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "80%",
    bgcolor: '#fff',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

export default function Cards() {

    const comicsData = useSelector((state: any) => state?.comics?.comicsData)
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [isClicked, setIsClicked] = React.useState();

    const handleOpen = (id: any) => {
        setIsClicked(id);
        setOpen(true);
        console.log(isClicked)
    };
    const handleClose = () => {
        setOpen(false);
    };


    const fetchComics = async () => {
        await axios.get("http://gateway.marvel.com/v1/public/comics?ts=1&apikey=46131d0c93cdc66ce18f01b1418a2da2&hash=d0c0422aa25bc088f1d92079f999f676")
            .then((res) => {
                dispatch(getComicsData(res.data.data.results))
                console.log(res.data.data.results)
            })
    }
    useEffect(() => {
        fetchComics()
    }, [])
    return (
       <> 
        <div className="grid grid-cols-1 gap-4 py-2 justify-items-center xl:grid-cols-4 gap-4 md:grid-cols-2 gap-4 2xl:grid-cols-5 gap-4 lg:grid-cols-3 gap-4">

            {
                (!comicsData && comicsData == undefined) ?
                    <>
                        <Loader />
                    </>
                    :
                    comicsData.map((comic: any) => {
                        return (
                            <>
                                <div key={comic.id} onClick={() => handleOpen(comic.id)}>
                                    <div className="w-72 h-72">
                                        <div style={{ backgroundImage: `url(${comic.thumbnail.path}.${comic.thumbnail.extension})`, width: "100%", height: "100%", backgroundSize: "cover" }}>

                                        </div>
                                    </div>
                                    <div className="w-72 h-16 bg-[#151515] text-white">
                                        <h2 className="p-2 font-bold text-xl">{comic.title}</h2>
                                    </div>
                                </div>
                            </>
                        )
                    })
            }
        </div>
            <Modal
            open={open}
            onClose={handleClose}>
               <Box sx={style}>
                    <ModalPost id={isClicked}/>
                </Box> 
            </Modal> 
        </>

    )
}