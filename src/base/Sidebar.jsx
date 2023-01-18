import React from "react";
import { GiEternalLove } from "react-icons/gi";
import { BsCalendar3 } from "react-icons/bs";
import { FaCompass } from "react-icons/fa";

export const sidebar = [
    {
        group: "Menu",
        items: [
            {
                name:"Browse",
                path: "searchbox",
                icon: <FaCompass></FaCompass>
            },
            {
                name:"Trending",
                path: "trending",
                icon: <GiEternalLove></GiEternalLove>
            },
            {
                name: "Popular",
                path: "popular",
                icon: <BsCalendar3></BsCalendar3>
            },
        ],
    },
]