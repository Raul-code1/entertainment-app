import { MdMovie } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { CiMonitor } from "react-icons/ci";


export const sideBarLinks=[
    {
        id:1,
        text:'Home',
        path:'/',
        icon:<AiFillHome />
    },
    {
        id:2,
        text:'Movies',
        path:'/movies',
        icon:<MdMovie />
    },
    {
        id:3,
        text:'Tv series',
        path:'/tv',
        icon:<CiMonitor />
    }
]

 export const navBarItems=[
    {
        id:1,
        path:'/',
        icon:<AiFillHome />
    },
    {
        id:2,
        path:'/movies',
        icon:<MdMovie />
    },
    {
        id:3,
        path:'/tv',
        icon:<CiMonitor />
    }

];
