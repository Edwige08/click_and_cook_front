'use client'

import MyFollowersList from "@/components/MyFollowersList"
import { useUser } from "@/components/UserInfos"
import { useEffect, useState } from "react"
import { Follows } from "@/types/interface"
import { useSearchParams } from "next/navigation"
import Link from "next/link"

export default function Home() {
    const [myFollows, setMyFollows] = useState<boolean>(true)
    const [myFollowers, setMyFollowers] = useState<boolean>(false)
    const [myFollowsList, setMyFollowsList] = useState<Follows[]>([])
    const [myFollowersList, setMyFollowersList] = useState<Follows[]>([])

    const user = useUser().user;
    const searchParams = useSearchParams()

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

    useEffect(() => {
        const currentTab = searchParams.get('tab')
        if (currentTab === 'following') {
            setMyFollowers(true)
            setMyFollows(false)
        } else {
            setMyFollows(true)
            setMyFollowers(false)
        }
    }, [searchParams])

    useEffect(() => {
        async function getFollows() {
            const token = localStorage.getItem("auth_token");
            if (!token) return;

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/follows/`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Token ${token}`,
                },
            }
            );
            const data = await response.json();
            setMyFollowsList(data.results);
        }
        getFollows();
    }, []);

    useEffect(() => {
        async function getFollowers() {
            const token = localStorage.getItem("auth_token");
            if (!token) return;

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/follows/user-followers/${user?.id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Token ${token}`,
                },
            }
            );
            const data = await response.json();
            setMyFollowersList(data.results);
        }
        getFollowers();
    }, []);

    return (
        <>
            <div className="flex flex-row gap-2 md:gap-5 justify-center my-5 ">
                <button
                    onClick={displayMyFollows}
                    className={`p-2 border rounded-lg w-[40%] max-w-70 ${myFollows ? "font-bold underline bg-(--orangeColor)" : "text-gray-400"}`}>
                    Mes abonnements
                </button>
                <button
                    onClick={displayMyFollowers}
                    className={`p-2 border rounded-lg w-[40%] max-w-70 ${myFollowers ? "font-bold underline bg-(--orangeColor)" : "text-gray-400"}`}>
                    Mes abonnés
                </button>
            </div>

            <div className={`flex flex-col gap-1 py-2 px-4 ${myFollows ? "" : "hidden"}`}>
                {myFollowsList.map((follow) => {
                    return (
                        <MyFollowersList
                            username={follow.followed_user_detail.username}
                            key={follow.followed_user_detail.id} />
                    )
                })}
                {myFollowsList.length > 0 ?
                    <button className="flex flex-col items-center mx-10 my-5 px-4 py-2 border rounded-lg shadow-xl text-white bg-(--redColor) hover:bg-(--darkBlue)">
                        <Link href="/home">
                            ✨ Découvrir encore plus de nouvelles recettes et leurs créateurs
                        </Link>
                    </button> :
                    <div className={`flex flex-col items-center gap-1 py-2 px-4 ${myFollows ? "" : "hidden"}`}>
                        <p className="text-center">
                            Vous ne suivez personne pour le moment 🤷‍♀️
                        </p>
                        <button className="flex flex-col items-center mx-10 my-5 px-4 py-2 border rounded-lg shadow-xl text-white bg-(--redColor) hover:bg-(--darkBlue)">
                            <Link href="/home">
                                ✨ Découvrir de nouvelles recettes et leurs créateurs
                            </Link>
                        </button>
                    </div>
                }
            </div>
            <div className={`flex flex-col gap-1 py-2 px-4 ${myFollowers ? "" : "hidden"}`}>
                {myFollowersList.map((follow) => {
                    return (
                        <MyFollowersList
                            username={follow.following_user_detail.username}
                            key={follow.following_user_detail.id} />
                    )
                })}

                {myFollowersList.length > 0 ?
                    <button className="flex flex-col items-center mx-10 my-5 px-4 py-2 border rounded-lg shadow-xl text-white bg-(--redColor) hover:bg-(--darkBlue)">
                        <Link href="/home">
                            ✨ Découvrir encore plus de nouvelles recettes et leurs créateurs
                        </Link>
                    </button> :
                    <div className={`flex flex-col items-center gap-1 py-2 px-4 ${myFollowers ? "" : "hidden"}`}>
                        <p className="text-center">
                            Vous n&apos;avez pas encore de follower 🤷‍♀️
                        </p>
                        <button className="flex flex-col items-center mx-10 my-5 px-4 py-2 border rounded-lg shadow-xl text-white bg-(--redColor) hover:bg-(--darkBlue)">
                            <Link href="/home">
                                ✨ Découvrir de nouvelles recettes et leurs créateurs
                            </Link>
                        </button>
                    </div>
                }
            </div>
        </>
    )
}