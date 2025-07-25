'use client'

import MyFollowersList from "@/components/MyFollowersList"
import MyFollowsList from "@/components/MyFollowsList"
import { useState } from "react"

export default function Home() {
    const [myFollows, setMyFollows] = useState(true)
    const [myFollowers, setMyFollowers] = useState(false)

    const displayMyFollows = () => {
        if (!myFollows) {
            setMyFollows(true)
            setMyFollowers(false)
        }
    }
    const displayMyFollowers = () => {
        if (!myFollowers) {
            setMyFollowers(true)
            setMyFollows(false)
        }
    }
    return (
        <>
            <div className="flex flex-row gap-2 md:gap-5 justify-center my-5 ">
                <button
                    onClick={displayMyFollows}
                    className={`p-2 border rounded-lg w-[40%] max-w-70 ${myFollows ? "font-bold underline bg-(--orangeColor)" : "text-gray-400" }`}>
                    Mes abonnements
                </button>
                <button
                    onClick={displayMyFollowers}
                    className={`p-2 border rounded-lg w-[40%] max-w-70 ${myFollowers ? "font-bold underline bg-(--orangeColor)" : "text-gray-400" }`}>
                    Mes abonnés
                </button>
            </div>
            <div>
                <MyFollowsList 
                classes={` ${myFollows ? "" : "hidden"}`}
                />
                <MyFollowersList 
                classes={` ${myFollowers ? "" : "hidden"}`}
                />
            </div>
        </>
    )
}