import React, { useEffect, useState } from "react";
import "../assets/css/header.css";

function Header() {
    const [videocenter, SetVideocenter] = useState(0);
    useEffect(() => {
        if (window.location.pathname == '/videos') {
            console.log('sdf');
            SetVideocenter(1);
        }
    }, [])
    return (
        <header className="container" style={{ maxHeight: 100 }}>
            <div className="d-md-flex justify-content-between text-center" style={window.location.href === '/' ? { backgroundColor: "#000" } : { backgroundColor: "transparent" }}>
                <div className="py-3 flex mt-auto mb-auto">
                    <a href="/" className={videocenter ? "text-decoration-none text-white videoheader" : "text-decoration-none text-white "} ><h1 >michael bloom</h1></a>
                    <div className={videocenter ? "py-4" : ""}></div>
                </div>
                <div className="d-flex flex-wrap justify-content-between justify-content-md-center p-2  pt-md-5 pb-md-5">
                    <a href="/contact" className="item text-decoration-none">Contact</a>
                    <a href="/projects" className="item text-decoration-none">Personal Projects</a>
                    <a href="/photos" className="item text-decoration-none">Photos</a>
                </div>
            </div>
        </header>
    );
}

export default Header;
