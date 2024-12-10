import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'

function Profile() {
    const sidebar = ["profilim", "siparişlerim", "adreslerim", "snap kartım", "hediye kartlarım", "şifre işlemleri", "favorilerim", "sıkça sorulan sorular", "çıkış yap"]
    const location = useLocation();
    return (
        <div>
            <div className=' md:w-48 text-left capitalize flex flex-col items-center text-sm font-light m-8  '>
                {sidebar.map((e, i) => {
                    const path = `/profile/${e.toLocaleLowerCase("TR-tr").replace(/\s+/g, '')}`;
                    const isActive = location.pathname === path;
                    return (<Link key={i} to={path} className={`w-full p-2.5 hover:font-medium  hover:bg-accent focus:bg-accent border-r-2 ${isActive ? 'border-r-2.5 border-black font-medium' : ""}`}>{e}</Link>)
                })}
            </div>


        </div >
    )
}

export default Profile