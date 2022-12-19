import Image from "next/image";
import Link from "next/link";
import imgMarvel from "../../public/image/Marvel_Logo.svg"


export default function Header() {
    return (
        <header className="bg-[#202020]">
            <div className="flex justify-center border-b border-[#393939]">
                <Image src={imgMarvel} alt="logo marvel" width={200}
                    height={300} />
            </div>
            <ul className="flex justify-center gap-4 py-4 text-xs text-white font-medium lg:text-xl 2xl:text-xl">
                <li><Link href="#">CHARACTERS</Link></li>
                <li><Link href="#">COMICS</Link></li>
                <li><Link href="#">SERIES</Link></li>
                <li><Link href="#">MOVIES</Link></li>
            </ul>
        </header>
    )
}