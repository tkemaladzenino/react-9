import React from "react";
import { Outlet, Link } from "react-router-dom";

function Layout() {
    return (

        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/main">Main</Link>
                    </li>
                    <li>
                        <Link to="/about">About </Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>

    );
}

export default Layout;



