"use client"
import Link from "next/link";

const Navber = () => {
    return (
        <ul className="flex justify-center space-x-3 bg-[green] text-white py-2">
            <li><Link href={"/"}>Imgbb</Link></li>
            <li><Link href={"/multer"}>Multer</Link></li>
        </ul>
    );
};

export default Navber;