"use client"
import { useRouter } from "next/navigation"

const Logo = () => {
    const router = useRouter()
    return (
        <div className="text-gray-800 md:text-2xl hidden md:block font-bold">
            Market<span className="text-blue-500">Place</span>
        </div>
    );
}

export default Logo;
