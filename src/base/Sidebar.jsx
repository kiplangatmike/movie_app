import React from "react";
import { GiEternalLove } from "react-icons/gi";
import { MdOutlineTrendingUp } from "react-icons/md";
import { FaCompass, FaHome } from "react-icons/fa";
import { RiMovie2Fill } from "react-icons/ri";
import { MdMovie } from "react-icons/md";

export const sidebar = [
    {
        group: "Menu",
        items: [
            {
                name:"Home",
                path: "/",
                icon: <FaHome></FaHome>
            },
            {
                name:"Browse",
                path: "searchbox",
                icon: <FaCompass></FaCompass>
            },
            {
                name:"Trending",
                path: "trendingpage",
                icon: <GiEternalLove></GiEternalLove>
            },
            {
                name: "Popular",
                path: "popularpage",
                icon: <MdOutlineTrendingUp></MdOutlineTrendingUp>
            },
        ],
    },
    {
        group: "categories",
        items: [
            {
                name: "Series",
                path: "series",
                icon: <RiMovie2Fill></RiMovie2Fill>,
            },
            {
                name: "Movies",
                path: "movies",
                icon: <MdMovie></MdMovie>,
            },
        ]
    }
]